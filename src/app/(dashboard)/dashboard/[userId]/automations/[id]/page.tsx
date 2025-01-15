"use client"

import { updateAutomationName } from '@/actions/automations'
import AutomationEditorTopNav from '@/components/ui/automation-editor-top-nav'
import { useQueryAutomation } from '@/hooks/use-user-queries'
import { Activity, Ear, Send } from 'lucide-react'
import React, { use } from 'react'

type Params = {
  id: string
}

type Props = {
  params: Promise<Params>
}

const AutomationEditor = ({
  params
}: Props) => {
  const unwrappedParams = use(params)
  const { data } = useQueryAutomation(unwrappedParams.id)

   if(data?.status !== 200 || !data?.res?.id){
    return <></>
   }

   const automationName = data?.res?.name ? data?.res.name : 'Untitled Automation'

  return (
    <div className="p-4 bg-neutral-200 dark:bg-neutral-900 min-h-screen">
      <AutomationEditorTopNav id={data?.res?.id} name={automationName} />
      <div className="flex flex-col justify-center items-center mt-10 relative">
        {/* Trigger Box */}
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 p-6 min-w-[450px] max-w-[800px] relative z-10">
          <div className="flex items-start gap-4">
            <Send className="w-6 h-6 text-neutral-500 dark:text-neutral-400 mt-1" />
            <div className="flex flex-col gap-y-1">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Trigger</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">When this happens:</p>
              <p className="font-semibold text-neutral-900 dark:text-neutral-100 text-xs">WEBHOOK</p>
            </div>
          </div>
        </div>

        {/* Vertical Line with Plus Symbol */}
        <div className="flex flex-col items-center relative z-0">
          {/* Line */}
          <div className="w-1 bg-neutral-300 dark:bg-neutral-600 h-10"></div>
          {/* Plus Symbol */}
          <div className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-full w-6 h-6 flex items-center justify-center text-neutral-700 dark:text-neutral-300 text-sm font-bold relative z-10">
            +
          </div>
          {/* Line */}
          <div className="w-1 bg-neutral-300 dark:bg-neutral-600 h-10"></div>
        </div>

        {/* Listener Box */}
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 p-6 min-w-[450px] max-w-[800px] relative z-10">
          <div className="flex items-start gap-4">
            <Ear className="w-6 h-6 text-neutral-500 dark:text-neutral-400 mt-1" />
            <div className="flex flex-col gap-y-1">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Listener</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">And:</p>
              <p className="font-semibold text-neutral-900 dark:text-neutral-100 text-xs">CONTAINS KEYWORD</p>
            </div>
          </div>
        </div>

        {/* Vertical Line with Plus Symbol */}
        <div className="flex flex-col items-center relative z-0">
          {/* Line */}
          <div className="w-1 bg-neutral-300 dark:bg-neutral-600 h-10"></div>
          {/* Plus Symbol */}
          <div className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-full w-6 h-6 flex items-center justify-center text-neutral-700 dark:text-neutral-300 text-sm font-bold relative z-10">
            +
          </div>
          {/* Line */}
          <div className="w-1 bg-neutral-300 dark:bg-neutral-600 h-10"></div>
        </div>

        {/* Action Box */}
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 p-6 min-w-[450px] max-w-[800px] relative z-10">
          <div className="flex items-start gap-4">
            <Activity className="w-6 h-6 text-neutral-500 dark:text-neutral-400 mt-1" />
            <div className="flex flex-col gap-y-1">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Action</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Then:</p>
              <p className="font-semibold text-neutral-900 dark:text-neutral-100 text-xs">DM USER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutomationEditor
