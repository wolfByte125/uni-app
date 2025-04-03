"use client";
import { PageHeaderContent } from "@/app/lib/definitions";
import CustomFormTitle from "@/app/ui/CustomFormTitle";
import PageHeader from "@/app/ui/PageHeader";
import RequiredFieldNote from "@/app/ui/RequiredFieldNote";

export default function EducationalBackgroundForm() {
  const pageHeader: PageHeaderContent = {
    title: "Educational Background",
  };
  return (
    <div>
      <PageHeader content={pageHeader} />
      <div className="flex justify-center">
        <div className=" rounded-xl bg-white-bg p-5 w-4/5">
          <CustomFormTitle title="Edit Educational Background" />
          <RequiredFieldNote />
          <form action="" className="w-full">
            <div className="md:flex">
              <div className="flex flex-col gap-5 md:w-full xs:w-full mb-5">
                <input
                  type="text"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="Institution *"
                  name="institution"
                  required
                />
                <input
                  type="text"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="Country *"
                  name="country"
                />
                <input
                  type="text"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="Field of Study"
                  name="fieldOfStudy"
                  required
                />
                <input
                  type="text"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="Program Level *"
                  name="programLevel"
                  required
                />
                <input
                  type="text"
                  className="input input-bordered w-full text-md bg-lighter-gray-bg"
                  placeholder="Achievement"
                  name="achievement"
                />
                {/* PUT DATE PICKERS HERE */}
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
