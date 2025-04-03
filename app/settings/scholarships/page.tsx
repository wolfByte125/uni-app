import { PageHeaderContent } from "@/app/lib/definitions";
import PageHeader from "@/app/ui/PageHeader";
import Scholarships from "@/app/ui/settings/Scholarships";
import React from "react";

export default function page() {
  const pageHeader: PageHeaderContent = {
    title: "Scholarships",
  };
  return (
    <div className="w-full">
      <PageHeader content={pageHeader} />
      <Scholarships />
    </div>
  );
}
