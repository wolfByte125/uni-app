import React from "react";

export default function UniversityForm() {
  return (
    <div className="rounded-xl bg-white-bg shadow-lg p-5 w-2/5">
      <p className="text-3xl text-center">New University</p>
      <div className="divider divider-neutral"></div>
      <div className="">
        <form action="" className="flex flex-col items-center gap-3">
          <input
            type="text"
            className="input input-bordered input-primary w-full bg-white-bg"
            placeholder="University Name"
          />
          <select className="select select-bordered select-primary w-full bg-white-bg">
            <option value="" disabled selected>
              Select Country
            </option>
            {/* // get countries from db */}
          </select>
          <input
            type="text"
            className="input input-bordered input-primary w-full bg-white-bg"
            placeholder="City"
          />
          <input type="submit" className="btn btn-primary w-full" value="Add" />
        </form>
      </div>
    </div>
  );
}
