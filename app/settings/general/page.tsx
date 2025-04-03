"use client";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import React from "react";
import { IoMdOpen } from "react-icons/io";
import { tableContentFont, tableHeaderFont } from "@/app/ui/fonts";
import {
  CustomButtonContentType,
  PageHeaderContent,
} from "@/app/lib/definitions";
import PageHeader from "../../ui/PageHeader";
import { fetchCountries } from "@/api/src/countries";
import CustomButton from "@/app/ui/CustomButton";

export default async function page() {
  const fetchedCountries = await fetchCountries();

  console.log(fetchedCountries);
  const pageHeader: PageHeaderContent = {
    title: "General Settings",
  };

  const addCountryBtn: CustomButtonContentType = {
    label: "Add Country",
    link: "/country",
  };

  return (
    <div className="w-full">
      <PageHeader content={pageHeader} />
      <div className="p-5 rounded-box shadow-md bg-lighter-gray-bg">
        <p className="text-xl mb-5">Countries</p>
        <div>
          <CustomButton content={addCountryBtn} />
          <div className="w-full">
            <TableContainer component={Paper} className="bg-white-bg">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={`${tableHeaderFont.className}`}>
                      Country
                    </TableCell>
                    <TableCell className={`${tableHeaderFont.className}`}>
                      Continent
                    </TableCell>
                    <TableCell className={`${tableHeaderFont.className}`}>
                      Currency
                    </TableCell>
                    <TableCell
                      className={`${tableHeaderFont.className}`}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fetchedCountries?.map((country) => (
                    <TableRow
                      key={country.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell className={`${tableContentFont.className}`}>
                        {country.name}
                      </TableCell>
                      <TableCell className={`${tableContentFont.className}`}>
                        {country.continent}
                      </TableCell>
                      <TableCell className={`${tableContentFont.className}`}>
                        {country.currency}
                      </TableCell>
                      <TableCell className={`${tableContentFont.className}`}>
                        <Button variant="text">
                          <IoMdOpen size="20px" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
