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
import { LabelTypes } from "@/app/lib/definitions";
import { IoMdOpen } from "react-icons/io";

export default function Documents() {
  const docs: LabelTypes[] = [
    {
      labelId: "asdfg",
      name: "Diploma",
      type: "Document",
    },
    {
      labelId: "asdfh",
      name: "University/College Transcript",
      type: "Document",
    },
    {
      labelId: "asdfj",
      name: "Highschool Transcript",
      type: "Document",
    },
    {
      labelId: "asdfk",
      name: "Recommendation",
      type: "Document",
    },
  ];
  return (
    <div>
      <div className="p-5 rounded-box shadow-md bg-lighter-gray-bg">
        <p className="text-xl mb-5">Documents</p>
        <div>
          <button className="btn mb-5">Add Document</button>
          <div className="w-full">
            <TableContainer component={Paper} className="bg-white-bg">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="font-bold">
                    <TableCell className={`${tableHeaderFont.className}`}>
                      Document
                    </TableCell>
                    <TableCell
                      className={`${tableHeaderFont.className}`}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {docs.map((doc) => (
                    <TableRow
                      key={doc.labelId}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell className={`${tableContentFont.className}`}>
                        {doc.name}
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
