"use client";

import CreateAutomationButton from "@/components/ui/create-automation-btn";
import Search from "@/components/ui/search";
import { SidebarLayout } from "@/components/ui/sidebar";
import { MENU } from "@/constants/menu";
import { usePagePath } from "@/hooks/use-navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { userId: string };
};

const Layout = ({ children, params }: Props) => {
  const { page, pathname } = usePagePath();
  const pageTitle = page.charAt(0).toUpperCase() + page.slice(1);

  const currentMenuItem = MENU.find(
    (menuItem) => menuItem.label.toLowerCase() === page.toLowerCase()
  );

  const description = currentMenuItem?.description;

  //@TODO: Improve the below.
  const ignoreTopNav = /\/automations\/\d+$/.test(pathname);

  return (
    <div
      className="rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden"
      style={{ height: "calc(100vh - 40px)", width: "calc(100vw - 40px)", margin: "20px" }}
    >
      <SidebarLayout />
      <div className="flex flex-1">
        <div className="p-2 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col flex-1 w-full">
          {!ignoreTopNav && (
            <>
              <div className="flex items-center w-full gap-x-3">
                <Search />
                <CreateAutomationButton />
              </div>
              <div className="flex flex-col gap-y-2 mb-6 mt-6 ml-6">
                <h1 className="text-2xl font-semibold tracking-tight">
                  {pageTitle}
                </h1>
                {description && (
                  <p className="text-sm text-muted-foreground">{description}</p>
                )}
              </div>
            </>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
