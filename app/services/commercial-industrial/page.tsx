import { ServiceDetail } from "@/components/sections/service/ServiceDetail";
import { servicePages } from "@/lib/service-pages";

export const metadata = {
  title: "Commercial & Industrial Services · Higgins Electric",
  description:
    "Commercial and industrial electrical services in Connecticut. Design, install, repair, generators, and more.",
};

export default function CommercialIndustrialPage() {
  return <ServiceDetail data={servicePages["commercial-industrial"]} />;
}
