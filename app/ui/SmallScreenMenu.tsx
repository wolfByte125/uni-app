"use client";
import React from "react";
import { SIDEBAR_ROUTES } from "../lib/constants";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { MdAccountCircle, MdDashboard } from "react-icons/md";
import { IoIosDocument, IoMdSettings } from "react-icons/io";
import { Tooltip } from "@mui/material";

export default function SmallScreenMenu() {
  const pathname = usePathname();
  return (
    <div className="md:hidden flex justify-center fixed bottom-3 z-50 w-full">
      {/* <ul className="menu bg-base-200 lg:menu-horizontal rounded-box"> */}
      <ul className="menu bg-white-bg menu-horizontal rounded-box shadow-lg w-4/5 justify-between">
        <Tooltip title="Dashboard">
          <li
            className={clsx("w-fit", {
              "bg-gray-bg rounded-lg shadow-md": pathname.includes(
                SIDEBAR_ROUTES.DASHBOARD
              ),
            })}
          >
            <a href={SIDEBAR_ROUTES.DASHBOARD}>
              <div>
                <MdDashboard size="24px" />
              </div>
            </a>
          </li>
        </Tooltip>
        <Tooltip title="Applications">
          <li
            className={clsx("w-fit", {
              "bg-gray-bg rounded-lg shadow-md": pathname.includes(
                SIDEBAR_ROUTES.APPLICATIONS
              ),
            })}
          >
            <a href={SIDEBAR_ROUTES.APPLICATIONS}>
              <div>
                <IoIosDocument size="24px" />
              </div>
            </a>
          </li>
        </Tooltip>
        <Tooltip title="Settings">
          <li
            className={clsx("w-fit", {
              "bg-gray-bg rounded-lg shadow-md": pathname.includes(
                SIDEBAR_ROUTES.SETTINGS
              ),
            })}
          >
            <a href={SIDEBAR_ROUTES.SETTINGS}>
              <div>
                <IoMdSettings size="24px" />
              </div>
            </a>
          </li>
        </Tooltip>
        <Tooltip title="Manage Account">
          <li
            className={clsx("w-fit", {
              "bg-gray-bg rounded-lg shadow-md": pathname.includes(
                SIDEBAR_ROUTES.ACCOUNT
              ),
            })}
          >
            <a href={SIDEBAR_ROUTES.ACCOUNT}>
              <div>
                <MdAccountCircle size="24px" />
              </div>
            </a>
          </li>
        </Tooltip>
      </ul>
    </div>
  );
}
