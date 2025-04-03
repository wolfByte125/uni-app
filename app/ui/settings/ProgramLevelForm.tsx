"use client";
import { LABEL_TYPES } from "@/api/src/db/seed/constants";
import { NewLabel } from "@/api/src/db/types/label_types";
import { insertLabel } from "@/api/src/labels";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ProgramLevelForm() {
  const [formState, setFormState] = useState({
    name: "",
    type: LABEL_TYPES.PROGRAM_LEVEL,
  });

  const handleChange = async (event) => {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formState.name || !formState.type) {
      toast.error("Please fill required fields");
      return;
    }

    const data: NewLabel = {
      name: formState.name,
      type: LABEL_TYPES.PROGRAM_LEVEL,
    };
    console.log(data);
    await insertLabel(data)
      .then((res) => {
        setFormState({
          name: "",
          type: LABEL_TYPES.PROGRAM_LEVEL,
        });
        toast.success("Data Saved");
      })
      .catch((err) => toast.error("Data Not Saved"));
  };
  return (
    <div className="rounded-xl bg-white-bg shadow-lg p-5 ">
      <p className="text-3xl text-center">Add Program Level</p>
      <div className="divider divider-neutral"></div>
      <div className="">
        <form action="" className="flex flex-wrap justify-center gap-3">
          <input
            type="text"
            className="input input-bordered input-primary w-full bg-white-bg"
            placeholder="Country Name"
            name="name"
            value={formState?.name}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="btn btn-primary w-full"
            value="Save"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}
