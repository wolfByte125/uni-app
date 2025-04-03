"use client";
import {
  CustomButtonContentType,
  CustomCardMediumContentType,
} from "@/app/lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import CustomButton from "./CustomButton";

export default function CustomCardMedium({
  content,
}: {
  content: CustomCardMediumContentType;
}) {
  const { title, description, link } = content;
  const pathname = usePathname();
  return (
    <div>
      <div className="card card-body bg-white-bg w-96 shadow-xl">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={pathname + link} className=" ">
            Open
          </Link>
        </div>
      </div>
    </div>
  );
}
