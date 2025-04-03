import React from "react";
import { CustomCardMediumContentType } from "../lib/definitions";

export default function Tab({
  tabContents,
}: {
  tabContents: CustomCardMediumContentType[];
}) {
  return (
    <div className="flex justify-center px-5 py-2 border border-transparent border-b-harvard-crimson">
      {tabContents.map((content, idx) => (
        <div key={idx} className="px-5">
          {content.title}
        </div>
      ))}
    </div>
  );
}
