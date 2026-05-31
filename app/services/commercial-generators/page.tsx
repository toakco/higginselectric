import { ServiceDetail } from "@/components/sections/service/ServiceDetail";
import { servicePages } from "@/lib/service-pages";

export const metadata = {
  title: "Commercial Generators · Higgins Electric",
  description:
    "Commercial generator sales, install, and service in Connecticut. 24/7 emergency response.",
};

export default function CommercialGeneratorsPage() {
  return <ServiceDetail data={servicePages["commercial-generators"]} />;
}
