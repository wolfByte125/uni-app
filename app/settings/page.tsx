import {
  PageHeaderContent,
  CustomCardMediumContentType,
} from "../lib/definitions";
import PageHeader from "../ui/PageHeader";
import CustomCardMedium from "../ui/CustomCardMedium";
export default function page() {
  const settings: CustomCardMediumContentType[] = [
    {
      title: "General",
      description: "View and add countries with their details.",
      link: "/general",
    },
    {
      title: "Education",
      description: "Manage universities, fields of study and program levels.",
      link: "/education",
    },
    {
      title: "Requirements",
      description: "Register and view standardized tests and other documents.",
      link: "/requirements",
    },
    {
      title: "Scholarship",
      description:
        "Manage scholarhsips provided by universities as well as external scholarship providers.",
      link: "/scholarships",
    },
  ];

  const pageHeader: PageHeaderContent = {
    title: "Settings",
  };
  return (
    <div>
      {/* Settings */}
      <PageHeader content={pageHeader} />
      <div className="flex flex-wrap gap-5 justify-center">
        {settings.map((setting, idx) => (
          <div key={idx} className="">
            <CustomCardMedium content={setting} />
          </div>
        ))}
      </div>
    </div>
  );
}
