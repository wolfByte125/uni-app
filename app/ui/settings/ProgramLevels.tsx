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
import { CustomButtonContentType, LabelTypes } from "@/app/lib/definitions";
import { IoMdOpen } from "react-icons/io";
import CustomButton from "../CustomButton";

export default function ProgramLevels() {
  const levels: LabelTypes[] = [
    {
      labelId: "asdfg",
      name: "M.Sc.",
      type: "Program Level",
    },
    {
      labelId: "asdfh",
      name: "B.Sc.",
      type: "Program Level",
    },
    {
      labelId: "asdfj",
      name: "PhD",
      type: "Program Level",
    },
  ];

  const addProgramLevelBtn: CustomButtonContentType = {
    label: "Add Program Level",
    link: "/programLevel",
  };
  return (
    <div>
      <div className="p-5 rounded-box shadow-md bg-lighter-gray-bg">
        <p className="text-xl mb-5">Program Levels</p>
        <div>
          <CustomButton content={addProgramLevelBtn} />
          <div className="w-full">
            <TableContainer component={Paper} className="bg-white-bg">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="font-bold">
                    <TableCell className={`${tableHeaderFont.className}`}>
                      Program Level
                    </TableCell>
                    <TableCell
                      className={`${tableHeaderFont.className}`}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {levels.map((level) => (
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
