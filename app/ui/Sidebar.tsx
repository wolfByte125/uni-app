"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { SIDEBAR_ROUTES } from "../lib/constants";
import SiteHeader from "./SiteHeader";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="h-full sticky px-2">
      <SiteHeader />
      <div>
        {/* DASHBOARD */}
        <div>
          <a href={SIDEBAR_ROUTES.DASHBOARD}>
            <div
              className={clsx("py-3 px-5 mb-1 w-full", {
                "bg-lighter-gray-bg rounded-lg shadow-md font-semibold":
                  pathname.includes(SIDEBAR_ROUTES.DASHBOARD),
              })}
            >
              <p>Dashboard</p>
            </div>
          </a>
        </div>
        {/* APPLICATIONS */}
        <div>
          <a href={SIDEBAR_ROUTES.APPLICATIONS}>
            <div
              className={clsx("py-3 px-5 mb-1 w-full", {
                "bg-lighter-gray-bg rounded-lg shadow-md font-semibold":
                  pathname.includes(SIDEBAR_ROUTES.APPLICATIONS),
              })}
            >
              <p>Applications</p>
            </div>
          </a>
        </div>
        {/* SETTINGS */}
        <div>
          <a href={SIDEBAR_ROUTES.SETTINGS}>
            <div
              className={clsx("py-3 px-5 mb-1 w-full", {
                "bg-lighter-gray-bg rounded-lg shadow-md font-semibold":
                  pathname.includes(SIDEBAR_ROUTES.SETTINGS),
              })}
            >
              <p>Settings</p>
            </div>
          </a>
        </div>
        {/* MANAGE ACCOUNT */}
        <div>
          <a href={SIDEBAR_ROUTES.ACCOUNT}>
            <div
              className={clsx("py-3 px-5 mb-1 w-full", {
                "bg-lighter-gray-bg rounded-lg shadow-md font-semibold":
                  pathname.includes(SIDEBAR_ROUTES.ACCOUNT),
              })}
            >
              Manage Account
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
