"use client"

import AutomationCard from '@/components/ui/automation-card'
import NewAutomationCard from '@/components/ui/new-automation-card'
import { useQueryAutomations } from '@/hooks/use-user-queries'
import React, { useEffect } from 'react'

type Props = {}

const Automations = (props: Props) => {
  const { data } = useQueryAutomations();

  console.log(data)

  //@TODO: Render different content if no automations exist yet.
  if(data?.status !== 200){
    return <></>
  }

  return (
      <div className="p-4 bg-neutral-200 dark:bg-neutral-900 min-h-screen">
        <div className="flex flex-wrap gap-4">
          <NewAutomationCard/>
          {data.res!.map((automation) => (
          <AutomationCard
            key={automation.id}
            title={automation.name}
            keywords={["email", "notification", "customer"]}
            isActive={automation.active}
            createdAt={new Date(automation.createdAt)}
          />
        ))}
          <AutomationCard
            title="Email Notification Workflow"
            keywords={["email", "notification", "customer"]}
            isActive={true}
            createdAt={new Date("2025-01-01")}
          />
          <AutomationCard
            title="Email Notification Workflow"
            keywords={["email", "notification", "customer"]}
            isActive={true}
            createdAt={new Date("2025-01-01")}
          />
          <AutomationCard
            title="Email Notification Workflow"
            keywords={["email", "notification", "customer"]}
            isActive={true}
            createdAt={new Date("2025-01-01")}
          />
          <AutomationCard
            title="Email Notification Workflow"
            keywords={["email", "notification", "customer"]}
            isActive={true}
            createdAt={new Date("2025-01-01")}
          />
        </div>
      </div>

  )
}

export default Automations