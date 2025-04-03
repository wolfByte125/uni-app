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

export default function StandardizedTests() {
  const tests = [
    {
      testId: "asdff",
      name: "IELTS",
      totalPoints: 9,
    },
    {
      testId: "asdfh",
      name: "TOEFL",
      totalPoints: 120,
    },
    {
      testId: "asdfj",
      name: "SAT",
      totalPoints: 1600,
    },
    {
      testId: "asdfg",
      name: "GRE",
      totalPoints: 340,
    },
  ];

  return (
    <div>
      <div className="p-5 rounded-box shadow-md bg-lighter-gray-bg">
        <p className="text-xl mb-5">Standardized Tests</p>
        <div>
          <button className="btn mb-5">Add Test</button>
          <div className="w-full">
            <TableContainer component={Paper} className="bg-white-bg">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={`${tableHeaderFont.className}`}>
                      Standardized Test
                    </TableCell>
                    <TableCell className={`${tableHeaderFont.className}`}>
                      Total Points
                    </TableCell>
                    <TableCell
                      className={`${tableHeaderFont.className}`}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tests.map((test) => (
                    <TableRow
                      key={test.testId}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell className={`${tableContentFont.className}`}>
                        {test.name}
                      </TableCell>
                      <TableCell className={`${tableContentFont.className}`}>
                        {test.totalPoints}
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
