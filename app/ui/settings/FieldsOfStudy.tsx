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
import { LabelTypes } from "@/app/lib/definitions";
import { tableContentFont, tableHeaderFont } from "@/app/ui/fonts";
import { IoMdOpen } from "react-icons/io";

export default function FieldsOfStudy() {
  const studies: LabelTypes[] = [
    {
      labelId: "asdfg",
      name: "Computer Science",
      type: "Field of Study",
    },
    {
      labelId: "asdfh",
      name: "Electrical Engineering",
      type: "Field of Study",
    },
    {
      labelId: "asdfj",
      name: "Mechanical Engineering",
      type: "Field of Study",
    },
  ];
  return (
    <div>
      <div className="p-5 rounded-box shadow-md bg-lighter-gray-bg">
        <p className="text-xl mb-5">Fields of Study</p>
        <div>
          <button className="btn mb-5">Add Field of Study</button>
          <div className="w-full">
            <TableContainer component={Paper} className="bg-white-bg">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="font-bold">
                    <TableCell className={`${tableHeaderFont.className}`}>
                      Field of Study
                    </TableCell>
                    <TableCell
                      className={`${tableHeaderFont.className}`}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studies.map((level) => (
                    <TableRow
                      key={level.labelId}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell className={`${tableContentFont.className}`}>
                        {level.name}
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
