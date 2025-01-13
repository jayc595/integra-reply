"use client"

import React from 'react'
import { Button } from './button'
import { Zap } from 'lucide-react'
import { useCreateAutomation } from '@/hooks/use-automations'
import { useRouter } from "next/navigation";

type Props = {}

const NewAutomationCard = (props: Props) => {
  const router = useRouter();
  const { isPending, mutate } = useCreateAutomation(undefined, (data) => {
    // Redirect to the automation detail page
    if (data?.res?.id) {
      const url = `${window.location.pathname}/${data.res.id}`;
      router.push(`${url}`);
    } else {
      console.error("No automation ID found in response");
    }
  });

  return (
    <div className='flex flex-col overflow-hidden w-full min-w-[250px] max-w-2xl mb-2'>
        <Button 
          onClick={mutate} 
          className='bg-gradient-to-br from-[#3352cc] font-medium to-[#1c2d70] text-white hover:opacity-80 h-[150px]' 
          disabled={isPending}
        >
        <Zap size={16} strokeWidth={2} />
        <p className='text-lg'>Create New Automation</p>
        </Button>
    </div>
  )
}

export default NewAutomationCard