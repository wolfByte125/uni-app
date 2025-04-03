import React from "react";
import { PageHeaderContent } from "../lib/definitions";

export default function PageHeader({
  content,
}: {
  content: PageHeaderContent;
}) {
  const { title } = content;
  return (
    <div className="p-5 mb-5 rounded-xl text-center font-bold text-3xl">
      {title}
    </div>
  );
}
