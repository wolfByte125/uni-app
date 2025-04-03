"use client";
import { Divider } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function PersonalDetails() {
  const pathname = usePathname();
  return (
    <div>
      {/* NAMES */}
      <div className="md:flex md:flex-wrap mt-5">
        <div className="md:w-1/3 mb-5">
          <div>First Name</div>
          <div className="font-medium text-xl">Abel</div>
        </div>
        <div className="md:w-1/3 mb-5">
          <div>Middle Name</div>
          <div className="font-medium text-xl">Matheos</div>
        </div>
        <div className="md:w-1/3 mb-5">
          <div>Last Name</div>
          <div className="font-medium text-xl">Getiso</div>
        </div>
      </div>
      <Divider className="mb-5" />
      {/* CONTACTS */}
      <div className="md:flex md:flex-wrap">
        <div className="md:w-1/3 mb-5">
          <div>Email</div>
          <div className="font-medium text-xl">wolfbyte@bytr.com</div>
        </div>
        <div className="md:w-1/3 mb-5">
          <div>Phone Number</div>
          <div className="font-medium text-xl">(+251) 923 162 082</div>
        </div>
      </div>
      <Divider className="mb-5" />
      {/* RESIDENCY & CITIZENSHIP */}
      <div className="md:flex md:flex-wrap">
        <div className="md:w-1/3 mb-5">
          <div>Country of Citizenship</div>
          <div className="font-medium text-xl">Ethiopia</div>
        </div>
        <div className="md:w-1/3 mb-5">
          <div>Country of Residence</div>
          <div className="font-medium text-xl">Ethiopia</div>
        </div>
        <div className="md:w-1/3 mb-5">
          <div>City</div>
          <div className="font-medium text-xl">Addis Ababa</div>
        </div>
        <div className="md:w-1/3 mb-5">
          <div>Permanent Address</div>
          <div className="font-medium text-xl">Ayat 49</div>
        </div>
      </div>
      <div className="flex md:justify-end">
        <Link href={pathname + "/personalDetails"} className="btn ">
          Edit Personal Details
        </Link>
      </div>
    </div>
  );
}
