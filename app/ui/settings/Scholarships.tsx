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
import CustomButton from "../CustomButton";
import { CustomButtonContentType } from "@/app/lib/definitions";

export default function Scholarships() {
  const scholarships = [
    {
      scholarshipId: "asdfg",
      name: "Chevening Scholarship",
      type: "External",
      university: "-",
      externalProvider: "Chevening",
      applicableCountries: ["Britain", "Wales", "Ireland", "Scotland"],
    },
  ];

  const addScholarshipBtn: CustomButtonContentType = {
    label: "Add Scholarship",
    link: "/scholarship",
  };

  return (
    <div>
      <div className="p-5 rounded-box shadow-md bg-lighter-gray-bg">
        <p className="text-xl mb-5">Scholarships</p>
        <div>
          <CustomButton content={addScholarshipBtn} />
          <div className="w-full">
            <TableContainer component={Paper} className="bg-white-bg">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="font-bold">
                    <TableCell className={`${tableHeaderFont.className}`}>
                      Scholarship
                    </TableCell>
                    <TableCell className={`${tableHeaderFont.className}`}>
                      Type
                    </TableCell>
                    <TableCell className={`${tableHeaderFont.className}`}>
                      University
                    </TableCell>
                    <TableCell className={`${tableHeaderFont.className}`}>
                      External Provider
                    </TableCell>
                    <TableCell className={`${tableHeaderFont.className}`}>
                      Applicable Countries
                    </TableCell>
                    <TableCell
                      className={`${tableHeaderFont.className}`}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {scholarships.map((scholarship) => (
                    <TableRow
                      key={scholarship.scholarshipId}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell className={`${tableContentFont.className}`}>
                        {scholarship.name}
                      </TableCell>
                      <TableCell className={`${tableContentFont.className}`}>
                        {scholarship.type}
                      </TableCell>
                      <TableCell className={`${tableContentFont.className}`}>
                        {scholarship.university}
                      </TableCell>
                      <TableCell className={`${tableContentFont.className}`}>
                        {scholarship.externalProvider}
                      </TableCell>
                      <TableCell
                        className={`${tableContentFont.className} max-w-10`}
                      >
                        {scholarship.applicableCountries.map(String).join(", ")}
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
