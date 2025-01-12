import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './button'
import { Zap } from 'lucide-react'
import { createAutomation } from '@/actions/automations'

type Props = {}

const NewAutomationCard = async (props: Props) => {
    const [loading, setLoading] = useState(false);

    const handleCreateAutomation = async () => {
      try {
        setLoading(true);
        await createAutomation();
        console.log("Automation created successfully");
      } catch (error) {
        console.error("Error creating automation:", error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className='flex flex-col overflow-hidden w-full min-w-[250px] max-w-2xl mb-2'>
        <Button 
          onClick={handleCreateAutomation} 
          className='bg-gradient-to-br from-[#3352cc] font-medium to-[#1c2d70] text-white hover:opacity-80 h-[150px]' 
          disabled={loading}
        >
        <Zap size={16} strokeWidth={2} />
        <p className='text-lg'>Create New Automation</p>
        </Button>
    </div>
  )
}

export default NewAutomationCard