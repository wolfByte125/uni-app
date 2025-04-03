import { Chip } from "@mui/material";
import React from "react";
import { tableContentFont } from "./fonts";

export default function CustomChip({ label }: { label: string }) {
  return (
    // TODO: add custom coloring based on status
    <div>
      <Chip label={label} className={`${tableContentFont.className}`} />
    </div>
  );
}
