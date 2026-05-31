import { ServiceDetail } from "@/components/sections/service/ServiceDetail";
import { servicePages } from "@/lib/service-pages";

export const metadata = {
  title: "Residential Generators · Higgins Electric",
  description:
    "Residential generator sales, install, and service in Connecticut. 24/7 emergency response.",
};

export default function ResidentialGeneratorsPage() {
  return <ServiceDetail data={servicePages["residential-generators"]} />;
}
