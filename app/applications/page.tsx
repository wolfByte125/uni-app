import {
  ApplicationCardType,
  dateFormat,
  PageHeaderContent,
} from "../lib/definitions";
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
import CustomChip from "../ui/CustomChip";
import { IoMdOpen } from "react-icons/io";
import { tableContentFont, tableHeaderFont } from "../ui/fonts";
import PageHeader from "../ui/PageHeader";

export default function page() {
  const applications: ApplicationCardType[] = [
    {
      applicationId: "asdfg",
      university: "University of Edinburgh",
      programme: "Computer Science",
      programLevel: "M.Sc.",
      deadline: new Date(2025, 5, 25),
      applicationStatus: "Conditional Offer",
    },
    {
      applicationId: "asdfh",
      university: "Bradford University",
      programme: "Applied Computer Science and Artificial Intelligence",
      programLevel: "M.Sc.",
      deadline: new Date(2025, 4, 25),
      applicationStatus: "Conditional Offer",
    },
    {
      applicationId: "asdfj",
      university: "Bangor University",
      programme: "Advanced Computer Science",
      programLevel: "M.Sc.",
      deadline: new Date(2025, 6, 25),
      applicationStatus: "Completed",
    },
  ];
  const pageHeader: PageHeaderContent = {
    title: "Applications",
  };
  return (
    <div className="md:w-full">
      <PageHeader content={pageHeader} />
      <div className="md:flex md:flex-wrap md:justify-around">
        <TableContainer component={Paper} className="bg-white-bg">
          <Table className="w-full" aria-label="simple table">
            <TableHead>
              <TableRow className="font-bold">
                <TableCell className={`${tableHeaderFont.className}`}>
                  University
                </TableCell>
                <TableCell className={`${tableHeaderFont.className}`}>
                  Programme
                </TableCell>
                <TableCell className={`${tableHeaderFont.className}`}>
                  Program Level
                </TableCell>
                <TableCell className={`${tableHeaderFont.className}`}>
                  Deadline
                </TableCell>
                <TableCell className={`${tableHeaderFont.className}`}>
                  Status
                </TableCell>
                <TableCell
                  className={`${tableHeaderFont.className}`}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.map((application) => (
                <TableRow
                  key={application.applicationId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className={`${tableContentFont.className}`}>
                    {application.university}
                  </TableCell>
                  <TableCell className={`${tableContentFont.className}`}>
                    {application.programme}
                  </TableCell>
                  <TableCell className={`${tableContentFont.className}`}>
                    {application.programLevel}
                  </TableCell>
                  <TableCell className={`${tableContentFont.className}`}>
                    {application.deadline.toLocaleDateString(
                      undefined,
                      dateFormat
                    )}
                  </TableCell>
                  <TableCell className={`${tableContentFont.className}`}>
                    <CustomChip label={application.applicationStatus} />
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
  );
}
