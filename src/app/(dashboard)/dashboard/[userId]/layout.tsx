import { SidebarLayout } from "@/components/ui/sidebar";
import React from "react";
import { QueryClient } from '@tanstack/react-query';
import { PrefetchUser } from "@/lib/prefetch";
import TopNavigationBar from "@/components/ui/sidebar/top-navigation-bar";

type Props = {
  children: React.ReactNode;
  params: { userId: string };
};

const Layout = async ({ children, params }: Props) => {
  const query = new QueryClient();

  await PrefetchUser(query)


  return (
    <div
      className="rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden"
      style={{ height: "calc(100vh - 40px)", width: "calc(100vw - 40px)", margin: "20px" }}
    >
      <SidebarLayout />
      <div className="flex flex-1">
        <div className="p-2 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col flex-1 w-full">
          <TopNavigationBar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
