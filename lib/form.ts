import { business } from "./content";

/**
 * Resolves the form action used by contact/careers forms.
 * - Dynamic builds (default): post to /api/contact
 * - Static builds (STATIC_EXPORT=1): mailto fallback so the form still works
 *   on plain file hosting like GoDaddy until a 3rd-party form service is wired.
 */
export function getFormAction(subject = "New website inquiry") {
  if (process.env.NEXT_PUBLIC_STATIC_BUILD === "1") {
    return {
      action: `mailto:${business.email}?subject=${encodeURIComponent(subject)}`,
      method: "post" as const,
      encType: "text/plain" as const,
    };
  }
  return {
    action: "/api/contact",
    method: "post" as const,
    encType: "application/x-www-form-urlencoded" as const,
  };
}
