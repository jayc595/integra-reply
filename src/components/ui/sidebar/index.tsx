"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sidebar, SidebarBody, SidebarLink } from "./sidebar";
import { Blocks, House, LogOut, Settings, Workflow } from "lucide-react";
import { usePagePath } from "@/hooks/use-navigation";
import UpgradeCard from "./upgrade-card";
import { Separator } from "../separator";
import ClerkUserProfile from "./clerk-profile";
import { MENU } from "@/constants/menu";

export function SidebarLayout() {
  const { pathname } = usePagePath();

  const urlPath = pathname
  .split("/")
  .filter((segment) => segment && isNaN(Number(segment)))
  .pop()
  ?.toLowerCase() || "";

  const [open, setOpen] = useState(false);
  return (
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2 ">
              {MENU.map((link, idx) => (
                <SidebarLink key={idx} link={link} isActive={link.label.toLowerCase() === urlPath} />
              ))}
              <div className="pt-5">
                <Separator orientation="horizontal" className='bg-[#3e3e3f]'/>
              </div>
              {/* @TODO: Fix Clerk User Profile not showing. */}
              {/* <ClerkUserProfile/> */}
            </div>
          </div>
          <div>
            <UpgradeCard open={open}/>
          </div>
        </SidebarBody>
      </Sidebar> 
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Integra Reply
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
