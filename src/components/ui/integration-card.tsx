import React from 'react'
import { Button } from './button'

type Props = {
    title: string
    description: string
    icon: React.ReactNode
    type: string
}

const IntegrationCard = ({
    title,
    description,
    icon,
    type
}: Props) => {
  return (
    <div className='border-2 border-[#3352cc] rounded-2xl gap-x-5 p-5 flex items-center justify-between md:w-10/12 xl:w-8/12 2xl:w-6/12'>
        {icon}
        <div className='flex flex-col flex-1'>
            <h3 className='text-xl'>{title}</h3>
            <p className='text-[#9d9d9d] text-base w-full'>
                {description}
            </p>
        </div>
        <Button className='bg-gradient-to-br text-white rounded-full text-lg from-[#3352cc] font-medium to-[#1c2d70] hover:opacity-70 transition duration-100]'>Connect</Button>
    </div>
  )
}

export default IntegrationCard