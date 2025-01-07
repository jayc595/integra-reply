import { SidebarLayout } from '@/components/ui/sidebar'
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
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-screen">
                <div className="flex gap-2">
                    {[...new Array(4)].map((i) => (
                        <div
                            key={"first-array" + i}
                            className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
                <div className="flex gap-2 flex-1">
                    {[...new Array(2)].map((i) => (
                        <div
                            key={"second-array" + i}
                            className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout