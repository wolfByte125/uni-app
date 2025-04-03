import React from "react";

export interface SidebarContentType {
  label: string;
  link: string;
}

export interface ApplicationCardType {
  applicationId: string;
  university: string;
  programme: string;
  programLevel: string;
  deadline: Date;
  applicationStatus: string;
}

export interface CustomCardMediumContentType {
  title: string;
  description: string;
  link: string;
}

export interface CustomButtonContentType {
  label: string;
  link: string;
}

export interface AccordionContentType {
  title: string;
  content: React.ReactNode;
}

export interface LabelTypes {
  labelId: string;
  name: string;
  type: string;
}

export interface PageHeaderContent {
  title: string;
}

export const dateFormat: Intl.DateTimeFormatOptions = {
  // weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
