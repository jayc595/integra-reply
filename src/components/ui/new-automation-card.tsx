import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import { Zap } from 'lucide-react'

type Props = {}

const NewAutomationCard = (props: Props) => {
  return (
    <div className='flex flex-col overflow-hidden w-full min-w-[250px] max-w-2xl mb-2'>
        <Button className='bg-gradient-to-br from-[#3352cc] font-medium to-[#1c2d70] text-white hover:opacity-80 h-[150px]'>
        <Zap size={16} strokeWidth={2} />
        <p className='text-lg'>Create New Automation</p>
        </Button>
    </div>
  )
}

export default NewAutomationCard