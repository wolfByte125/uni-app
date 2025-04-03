"use client";
import { insertCountry } from "@/api/src/countries";
import { CONTINENTS } from "@/app/lib/constants";
import { useState } from "react";
import { NewCountry } from "../../../api/src/db/types/country_types";
import toast from "react-hot-toast";

export default function CountryForm() {
  const [formState, setFormState] = useState({
    name: "",
    continent: "",
    currency: "",
  });

  const handleChange = async (event) => {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formState.name || !formState.continent || !formState.currency) {
      // toast.error("Please fill required fields");
      return;
    }

    const data: NewCountry = {
      name: formState.name,
      continent: formState.continent,
      currency: formState.currency,
    };
    await insertCountry(data)
      .then((res) => {
        setFormState({
          name: "",
          continent: "",
          currency: "",
        });
        toast.success("Data Saved");
      })
      .catch((err) => toast.error("Data Not Saved"));
  };
  return (
    <div className="rounded-xl bg-white-bg shadow-lg p-5 ">
      <p className="text-3xl text-center">Add Country</p>
      <div className="divider divider-neutral"></div>
      <div className="">
        <form action="" className="flex flex-col items-center gap-3">
          <input
            type="text"
            className="input input-bordered input-primary w-full bg-white-bg"
            placeholder="Country Name"
            name="name"
            value={formState?.name}
            onChange={handleChange}
          />
          <select
            className="select select-bordered select-primary w-full bg-white-bg"
            name="continent"
            value={formState?.continent}
            onChange={handleChange}
          >
            <option value="" disabled selected>
              Select Continent
            </option>
            {Object.values(CONTINENTS).map((continent, idx) => (
              <option key={idx} value={continent}>
                {continent}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="input input-bordered input-primary w-full bg-white-bg"
            name="currency"
            placeholder="Currency"
            value={formState?.currency}
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
