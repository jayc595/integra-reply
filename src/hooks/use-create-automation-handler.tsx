"use client";

import { useCreateAutomation } from "@/hooks/use-automations";
import { useRouter } from "next/navigation";
import { useQueryUser } from "./use-user-queries";

export const useCreateAutomationHandler = () => {
  const router = useRouter();

  const data = useQueryUser();
  
  const userId = data.data?.data?.id;

  const { isPending, mutate } = useCreateAutomation(undefined, (data) => {
    // Redirect to the automation detail page
    if (data?.res?.id) {  
      const url = `/dashboard/${userId}/automations/${data.res.id}`;
      router.push(url);
    } else {
      console.error("No automation ID found in response");
    }
  });

  return { isPending, mutate };
};
