"use client";
import { PageHeaderContent } from "@/app/lib/definitions";
import CustomFormTitle from "@/app/ui/CustomFormTitle";
import PageHeader from "@/app/ui/PageHeader";
import RequiredFieldNote from "@/app/ui/RequiredFieldNote";
import React from "react";

export default function PersonalDetailsForm() {
  const pageHeader: PageHeaderContent = {
    title: "Personal Details",
  };
  return (
    <div>
      <PageHeader content={pageHeader} />
      <div className="flex justify-center">
        <div className=" rounded-xl bg-white-bg p-5 w-4/5">
          <CustomFormTitle title="Edit Personal Details" />
          <RequiredFieldNote />
          <form action="" className="w-full">
            <div className="md:flex">
              <div className="flex flex-col gap-5 md:w-1/2 xs:w-full mb-5">
                <input
                  type="text"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="First Name *"
                  name="firstName"
                  required
                />
                <input
                  type="text"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="Middle Name"
                  name="middleName"
                />
                <input
                  type="text"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="Last Name *"
                  name="lastName"
                  required
                />
                <input
                  type="email"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="Email *"
                  name="email"
                  required
                />
                <input
                  type="text"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="Phone Number"
                  name="phoneNumber"
                />
              </div>
              <div className="divider divider-horizontal divider-primary"></div>
              <div className="flex flex-col gap-5 md:w-1/2 xs:w-full mb-5">
                <input
                  type="text"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="Country of Citizenship *"
                  name="citizenshipCountry"
                  required
                />
                <input
                  type="text"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="Country of Residence *"
                  name="residenceCountry"
                  required
                />
                <input
                  type="text"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="City"
                  name="city"
                />
                <input
                  type="text"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="Permanent Address"
                  name="permanentAddress"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between mb-5"></div>
            <input type="submit" className="btn w-full" value="Save" />
          </form>
        </div>
      </div>
    </div>
  );
}
