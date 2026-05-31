import { ServiceDetail } from "@/components/sections/service/ServiceDetail";
import { servicePages } from "@/lib/service-pages";

export const metadata = {
  title: "Residential Services · Higgins Electric",
  description:
    "Residential electrical services in Connecticut. Panels, wiring, lighting, surge protection, EV chargers, and more.",
};

export default function ResidentialPage() {
  return <ServiceDetail data={servicePages.residential} />;
}
