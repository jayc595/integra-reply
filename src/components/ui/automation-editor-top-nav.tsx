'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Undo, Redo, Save, Eye } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { updateAutomationName } from '@/actions/automations'

type Props = {
  id: string
  name: string
  onSave?: (title: string) => void
  onPreview?: () => void
  onActivate?: (isActive: boolean) => void
}

const AutomationEditorTopNav: React.FC<Props> = ({ 
  id,
  name,
  onSave, 
  onPreview, 
  onActivate 
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(name)
  const [isActive, setIsActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleTitleBlur = () => {
    if(name !== title){
      console.log("editing finished + title is different");
      const result = updateAutomationName(id,title);
      name === title
    }
    setIsEditing(false)
    if (onSave) onSave(title)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTitleBlur()
    }
  }

  const handleActivateToggle = (checked: boolean) => {
    setIsActive(checked)
    if (onActivate) onActivate(checked)
  }

  // updateAutomationName()

  return (
    <div className="flex items-center justify-between bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 overflow-hidden p-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className='cursor-pointer group'
              onClick={() => setIsEditing(true)}
            >
              {isEditing ? (
                <Input
                  ref={inputRef}
                  value={title}
                  onChange={handleTitleChange}
                  onBlur={handleTitleBlur}
                  onKeyDown={handleKeyDown}
                  className="w-64"
                />
              ) : (
                <p className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 px-2 py-1 rounded transition-colors duration-200">
                  {title}
                </p>
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to edit title</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className='flex items-center space-x-2'>
        <Button variant="outline" size="icon">
          <Undo className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Redo className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-600 mx-2" />
        <Button variant="outline" size="sm" onClick={() => onSave && onSave(title)}>
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
        <Button variant="outline" size="sm" onClick={onPreview}>
          <Eye className="h-4 w-4 mr-2" />
          Preview
        </Button>
        <div className="flex items-center space-x-2">
          <Switch
            checked={isActive}
            onCheckedChange={handleActivateToggle}
          />
          <span>{isActive ? 'Active' : 'Inactive'}</span>
        </div>
      </div>
    </div>
  )
}

export default AutomationEditorTopNav  