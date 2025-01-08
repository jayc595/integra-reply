import { House, Workflow, Blocks, Settings, LogOut } from "lucide-react";

type MENU_TYPE = {
    label: string
    description?: string
    icon: React.ReactNode
    href: string
}

export const MENU: MENU_TYPE[] = [
    {
      label: "Dashboard",
      href: "/dashboard/1234",
      icon: (
        <House className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Automations",
      description: "Automate routine processes to focus on what matters most.",
      href: "/dashboard/1234/automations",
      icon: (
        <Workflow className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Integrations",
      description: "Connect your accounts to enable automated responses.",
      href: "/dashboard/1234/integrations",
      icon: (
        <Blocks className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      description: "Customize your preferences and manage your account settings.",
      href: "/dashboard/1234/settings",
      icon: (
        <Settings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <LogOut className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];