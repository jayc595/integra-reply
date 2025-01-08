import CreateAutomationButton from '@/components/ui/create-automation-btn'
import Search from '@/components/ui/search'
import { SidebarLayout } from '@/components/ui/sidebar'
import { Divide } from 'lucide-react'
import React from 'react'

type Props = {
    children: React.ReactNode
    params: { userId: string }
}

const Layout = ({
    children,
    params
}: Props) => {


  return (
    <div
  className="rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden"
  style={{ height: "calc(100vh - 40px)", width: "calc(100vw - 40px)", margin: "20px" }}
>
        <SidebarLayout/>

        {/* Temporary. */}
        <div className="flex flex-1">
            <div className="p-2 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col flex-1 w-full h-screen">
                
            <div className="flex flex-col flex-1">
                <div className="flex items-center w-full gap-x-3">
                    <Search/>
                    <CreateAutomationButton />
                </div>
            </div>
            {children}
            </div>
        </div>
    </div>
  )
}

export default Layout