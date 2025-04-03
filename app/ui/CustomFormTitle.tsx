import React from "react";

export default function CustomFormTitle({ title }: { title: string }) {
  return (
    <div className="mb-5 border border-transparent border-b-gray-bg">
      <p className="text-center text-2xl font-medium mb-5">{title}</p>
    </div>
  );
}
