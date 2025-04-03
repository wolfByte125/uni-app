"use client";
import { dateFormat } from "@/app/lib/definitions";
import { Divider } from "@mui/material";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function SingleEducationalBackground({ data }: { data: any }) {
  const pathname = usePathname();
  const {
    bgId,
    institution,
    country,
    programLevel,
    fieldOfStudy,
    achievement,
    startDate,
    endDate,
  } = data;

  return (
    <div className="p-5 rounded-xl shadow-lg">
      <div className="my-5">
        <div>Institution</div>
        <div className="font-medium text-xl">{institution}</div>
      </div>
      <div className="md:flex md:flex-wrap mt-5">
        <div className="md:w-1/3 mb-5">
          <div>Country</div>
          <div className="font-medium text-xl">{country}</div>
        </div>
        <div className="md:w-1/3 mb-5">
          <div>Field Of Study</div>
          <div className="font-medium text-xl">{fieldOfStudy}</div>
        </div>
        <div className="md:w-1/3 mb-5">
          <div>Program Level</div>
          <div className="font-medium text-xl">{programLevel}</div>
        </div>
      </div>
      <Divider className="mb-5" />
      {/* CONTACTS */}
      <div className="md:w-1/3 mb-5">
        <div>Achievement</div>
        <div className="font-medium text-xl">{achievement}</div>
      </div>
      <div className="md:flex md:flex-wrap">
        <div className="md:w-1/3 mb-5">
          <div>Start Date</div>
          <div className="font-medium text-xl">
            {startDate.toLocaleDateString(undefined, dateFormat)}
          </div>
        </div>
        <div className="md:w-1/3 mb-5">
          <div>End Date</div>
          <div className="font-medium text-xl">
            {endDate.toLocaleDateString(undefined, dateFormat)}
          </div>
        </div>
      </div>

      <div className="flex md:justify-end">
        <Link href={pathname + "/educationalBackground"} className="btn ">
          Edit
        </Link>
      </div>
    </div>
  );
}
