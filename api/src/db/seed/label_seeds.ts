import { NewLabel } from "../types/label_types";
import { insertLabels } from "../../labels/index";
import { LABEL_TYPES } from "./constants";

export async function seed_labels() {
  // FEE
  const tuitionFeeLabel: NewLabel = {
    name: "Tuition Fee",
    type: LABEL_TYPES.FEE,
  };

  const applicationFeeLabel: NewLabel = {
    name: "Application Fee",
    type: LABEL_TYPES.FEE,
  };

  // DOCUMENT
  const transriptLabel: NewLabel = {
    name: "Transcript",
    type: LABEL_TYPES.DOCUMENT,
  };

  const diplomaLabel: NewLabel = {
    name: "Diploma",
    type: LABEL_TYPES.DOCUMENT,
  };

  const recommendationLabel: NewLabel = {
    name: "Recommendation",
    type: LABEL_TYPES.DOCUMENT,
  };

  // PROGRAM LEVEL
  const bscLabel: NewLabel = {
    name: "B.Sc.",
    type: LABEL_TYPES.PROGRAM_LEVEL,
  };

  const mscLabel: NewLabel = {
    name: "M.Sc.",
    type: LABEL_TYPES.PROGRAM_LEVEL,
  };

  const baLabel: NewLabel = {
    name: "B.A.",
    type: LABEL_TYPES.PROGRAM_LEVEL,
  };

  const maLabel: NewLabel = {
    name: "M.A.",
    type: LABEL_TYPES.PROGRAM_LEVEL,
  };

  // FIELD OF STUDY
  const computerScienceLabel: NewLabel = {
    name: "Computer Science",
    type: LABEL_TYPES.FIELD_OF_STUDY,
  };

  const softwareEngineeringLabel: NewLabel = {
    name: "Software Engineering",
    type: LABEL_TYPES.FIELD_OF_STUDY,
  };

  const accountingLabel: NewLabel = {
    name: "Accounting",
    type: LABEL_TYPES.FIELD_OF_STUDY,
  };

  await insertLabels([
    tuitionFeeLabel,
    applicationFeeLabel,
    transriptLabel,
    diplomaLabel,
    recommendationLabel,
    bscLabel,
    mscLabel,
    baLabel,
    maLabel,
    computerScienceLabel,
    softwareEngineeringLabel,
    accountingLabel,
  ]);

  console.log("Labels Seeded.");
}
