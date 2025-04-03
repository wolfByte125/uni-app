"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CustomButtonContentType } from "../lib/definitions";

export default function CustomButton({
  content,
}: {
  content: CustomButtonContentType;
}) {
  const { label, link } = content;
  const pathname = usePathname();
  return (
    <Link href={pathname + link} className="btn mb-5">
      {label}
    </Link>
  );
}
