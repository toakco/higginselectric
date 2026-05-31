/**
 * Builds a static export of the site.
 *
 * Why this script exists: Next.js refuses to statically export a project that
 * contains a server-only API route. We back up `app/api` to a sibling folder,
 * delete the original, run the build, then restore — wrapped in try/finally so
 * a build error never leaves the project in a broken state.
 *
 * Why cp+rm instead of rename: on Windows, renaming a directory that has any
 * handle open inside it (file watcher, editor, lingering Node process) throws
 * EPERM. Copy + remove tolerates that.
 */

import { existsSync, cpSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const apiSrc = join(root, "app", "api");
const apiBak = join(root, ".api-backup");
const outDir = join(root, "out");
const nextDir = join(root, ".next");

let didBackup = false;
try {
  if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });
  if (existsSync(nextDir)) rmSync(nextDir, { recursive: true, force: true });
  if (existsSync(apiBak)) rmSync(apiBak, { recursive: true, force: true });

  if (existsSync(apiSrc)) {
    cpSync(apiSrc, apiBak, { recursive: true });
    rmSync(apiSrc, { recursive: true, force: true });
    didBackup = true;
  }

  const result = spawnSync(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["next", "build"],
    {
      cwd: root,
      stdio: "inherit",
      env: {
        ...process.env,
        STATIC_EXPORT: "1",
        NEXT_PUBLIC_STATIC_BUILD: "1",
      },
    }
  );

  if (result.status !== 0) {
    process.exitCode = result.status ?? 1;
  } else {
    console.log("\n✓ Static export ready at:", outDir);
  }
} finally {
  if (didBackup && existsSync(apiBak)) {
    if (!existsSync(apiSrc)) {
      cpSync(apiBak, apiSrc, { recursive: true });
    }
    rmSync(apiBak, { recursive: true, force: true });
  }
}
