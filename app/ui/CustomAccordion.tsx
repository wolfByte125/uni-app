import React from "react";
import { AccordionContentType } from "../lib/definitions";

export default function CustomAccordion({
  accordionContent,
}: {
  accordionContent: AccordionContentType;
}) {
  const { title, content } = accordionContent;
  return (
    <div>
      <div className="collapse collapse-plus bg-white-bg mb-5">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium border border-transparent border-b-gray-bg">
          {title}
        </div>
        <div className="collapse-content">{content}</div>
      </div>
    </div>
  );
}
