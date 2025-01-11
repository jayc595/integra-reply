import AutomationEditorTopNav from '@/components/ui/automation-editor-top-nav'
import React from 'react'

type Props = {}

const AutomationEditor = (props: Props) => {
  return (
    <div className="p-4 bg-neutral-200 dark:bg-neutral-900 min-h-screen">
        <AutomationEditorTopNav/>
        Automation Editor
    </div>
  )
}

export default AutomationEditor