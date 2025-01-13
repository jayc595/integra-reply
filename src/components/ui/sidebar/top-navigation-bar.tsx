"use client"
import React from 'react'
import Search from '../search'
import CreateAutomationButton from '../create-automation-btn'
import { MENU } from '@/constants/menu'
import { usePagePath } from '@/hooks/use-navigation'

type Props = {}

const TopNavigationBar = (props: Props) => {
    const { page, pathname } = usePagePath();
    const pageTitle = page?.charAt(0).toUpperCase() + page?.slice(1);

    const currentMenuItem = MENU.find(
        (menuItem) => menuItem.label.toLowerCase() === page?.toLowerCase()
    );

    const description = currentMenuItem?.description;

    //   @TODO: Improve the below.
    const ignoreTopNav = /\/automations\/.+$/.test(pathname);

    if(ignoreTopNav) return <></>

  return (
    <>
        <div className="flex items-center w-full gap-x-3">
            <Search />
            <CreateAutomationButton />
        </div>
        <div className="flex flex-col gap-y-2 mb-6 mt-6 ml-6">
            <h1 className="text-2xl font-semibold tracking-tight">
                {pageTitle}
            </h1>
             {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
            )}
        </div>
    </>
  )
}

export default TopNavigationBar