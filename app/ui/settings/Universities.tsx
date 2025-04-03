import React from "react";
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
import { tableContentFont, tableHeaderFont } from "@/app/ui/fonts";
import { IoMdOpen } from "react-icons/io";

export default function Universities() {
  const universities = [
    {
      universityId: "ea23",
      name: "University of Edinburgh",
      city: "Edinburgh",
      country: "Scotland",
    },
    {
      universityId: "ea24",
      name: "Bradford University",
      city: "Bradford",
      country: "Britain",
    },
  ];

  return (
    <div>
      <div className="p-5 rounded-box shadow-md bg-lighter-gray-bg">
        <p className="text-xl mb-5">Universities</p>
        <div>
          <button className="btn mb-5">Add University</button>
          <div className="w-full">
            <TableContainer component={Paper} className="bg-white-bg">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="font-bold">
                    <TableCell className={`${tableHeaderFont.className}`}>
                      University
                    </TableCell>
                    <TableCell className={`${tableHeaderFont.className}`}>
                      City
                    </TableCell>
                    <TableCell className={`${tableHeaderFont.className}`}>
                      Country
                    </TableCell>
                    <TableCell
                      className={`${tableHeaderFont.className}`}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {universities.map((university) => (
                    <TableRow
                      key={university.universityId}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell className={`${tableContentFont.className}`}>
                        {university.name}
                      </TableCell>
                      <TableCell className={`${tableContentFont.className}`}>
                        {university.city}
                      </TableCell>
                      <TableCell className={`${tableContentFont.className}`}>
                        {university.country}
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
