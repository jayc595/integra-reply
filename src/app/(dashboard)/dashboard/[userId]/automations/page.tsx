"use client"

import AutomationCard from '@/components/ui/automation-card'
import NewAutomationCard from '@/components/ui/new-automation-card'
import { useQueryAutomations } from '@/hooks/use-user-queries'
import React from 'react'

type Props = {}

const Automations = (props: Props) => {
  const { data } = useQueryAutomations();

  //@TODO: Render different content if no automations exist yet.

  return (
      <div className="p-4 bg-neutral-200 dark:bg-neutral-900 min-h-screen">
        <div className="flex flex-wrap gap-4">
          <NewAutomationCard/>
          {data?.res!.map((automation) => (
            <AutomationCard
              id={automation.id}
              key={automation.id}
              title={automation.name}
              keywords={[]}
              isActive={automation.active}
              createdAt={automation.createdAt}
            />
        ))}
        </div>
      </div>

  )
}

export default Automations