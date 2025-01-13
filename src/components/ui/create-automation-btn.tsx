import React from 'react'
import { Button } from './button'
import { Zap } from 'lucide-react'
import { useCreateAutomationHandler } from '@/hooks/use-create-automation-handler'

type Props = {}

const CreateAutomationButton = (props: Props) => {
  const { isPending, mutate } = useCreateAutomationHandler();
  return (
    <Button 
      onClick={mutate}
      disabled={isPending}
      className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352cc] font-medium to-[#1c2d70] max-w-[256px]'
      >
        <Zap size={16} strokeWidth={2} />
        <p className='lg:inline hidden'>Create New Automation</p>
    </Button>
  )
}

export default CreateAutomationButton