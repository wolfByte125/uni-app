import { PageHeaderContent } from "@/app/lib/definitions";
import PageHeader from "@/app/ui/PageHeader";
import React from "react";
import StandardizedTests from "../../ui/settings/StandardizedTests";
import Documents from "../../ui/settings/Documents";
import CustomDivider from "@/app/ui/CustomDivider";

export default function page() {
  const pageHeader: PageHeaderContent = {
    title: "Requirements",
  };

  return (
    <div className="w-full">
      <PageHeader content={pageHeader} />
      <StandardizedTests />
      <CustomDivider />
      <Documents />
      <CustomDivider />
    </div>
  );
}
