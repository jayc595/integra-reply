"use client";

import { useCreateAutomation } from "@/hooks/use-automations";
import { useRouter } from "next/navigation";

export const useCreateAutomationHandler = () => {
  const router = useRouter();

  const { isPending, mutate } = useCreateAutomation(undefined, (result) => {
    // Redirect to the automation detail page
    if (result?.res?.id) {  
      const url = `/dashboard/${result.res.User.clerkId}/automations/${result.res.id}`;
      router.push(url);
    } else {
      console.error("No automation ID found in response");
    }
  });

  return { isPending, mutate };
};
