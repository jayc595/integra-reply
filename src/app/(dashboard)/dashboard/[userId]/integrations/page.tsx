import IntegrationCard from '@/components/ui/integration-card'
import { INTEGRATION_CARD } from '@/constants/integrations'
import React from 'react'

type Props = {}

const Integrations = (props: Props) => {
  return (
    <div className="flex justify-center min-h-screen p-8">
      <div className='flex flex-col w-full lg:w-8/12 gap-y-5 items-center'>
        {INTEGRATION_CARD.map((card,key) => (
          <IntegrationCard key={key} {...card} />
        ))}
      </div>
    </div>
  )
}

export default Integrations