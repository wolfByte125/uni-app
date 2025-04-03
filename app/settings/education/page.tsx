import React from "react";
import ProgramLevels from "../../ui/settings/ProgramLevels";
import FieldsOfStudy from "../../ui/settings/FieldsOfStudy";
import Universities from "../../ui/settings/Universities";
import { PageHeaderContent } from "@/app/lib/definitions";
import PageHeader from "@/app/ui/PageHeader";
import CustomDivider from "@/app/ui/CustomDivider";

export default function page() {
  const pageHeader: PageHeaderContent = {
    title: "Education Settings",
  };
  return (
    <div className="w-full">
      <PageHeader content={pageHeader} />
      <ProgramLevels />
      <CustomDivider />
      <FieldsOfStudy />
      <CustomDivider />
      <Universities />
    </div>
  );
}
