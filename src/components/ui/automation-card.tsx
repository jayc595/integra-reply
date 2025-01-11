"use client"

import React from 'react'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { usePagePath } from '@/hooks/use-navigation'

type AutomationCardProps = {
  title: string
  keywords: string[]
  isActive: boolean
  createdAt: Date
}

const AutomationCard: React.FC<AutomationCardProps> = ({
  title,
  keywords,
  isActive,
  createdAt
}) => {
      const { pathname } = usePagePath();

  return (
    <div className='flex flex-col bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 overflow-hidden w-full min-w-[250px] hover:opacity-80 max-w-2xl mb-2'>
        <Link href={`${pathname}/12345`}>
        <div className='p-6'>
            <div className='flex flex-wrap justify-between items-center gap-2 mb-4'>
            <h3 className='text-lg font-semibold text-neutral-800 dark:text-neutral-100 break-words'>{title}</h3>
            </div>
            <div className='flex flex-wrap gap-2 mb-4'>
            {keywords.map((keyword, index) => (
                <Badge key={index} variant="secondary" className="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200">
                {keyword}
                </Badge>
            ))}
            </div>
            <div className='text-xs text-neutral-500 dark:text-neutral-400'>
            Created on {createdAt.toLocaleDateString()}
            </div>
        </div>
        <div className={`h-1 w-full ${isActive ? 'bg-green-500' : 'bg-red-500'}`} />
      </Link>
    </div>
  )
}

export default AutomationCard