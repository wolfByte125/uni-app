import { AccordionContentType, PageHeaderContent } from "../lib/definitions";
import CustomAccordion from "../ui/CustomAccordion";
import PageHeader from "../ui/PageHeader";
import EducationalBackgrounds from "../ui/account/EducationalBackgrounds";
import PersonalDetails from "../ui/account/PersonalDetails";

export default function page() {
  const accountCategories: AccordionContentType[] = [
    {
      title: "Personal Details",
      content: <PersonalDetails />,
    },
    {
      title: "Educational Background",
      content: <EducationalBackgrounds />,
    },
  ];
  const pageHeader: PageHeaderContent = {
    title: "Manage Account",
  };
  return (
    <div className="w-full">
      <PageHeader content={pageHeader} />
      {accountCategories.map((category, idx) => (
        <div key={idx} className="">
          <CustomAccordion accordionContent={category} />
        </div>
      ))}
    </div>
  );
}
