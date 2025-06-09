import SupportProcess from "@/app/sections/SupportProcess/SupportProcess";
import ConsultationProcess from "@/app/sections/ConsultationProcess/ConsultationProcess";

export default function ProcessSection() {
  return (
    <>
      <div className="block [.client-consultation_&]:hidden">
        <SupportProcess />
      </div>
      <div className="hidden [.client-consultation_&]:block">
        <ConsultationProcess />
      </div>
    </>
  );
}
