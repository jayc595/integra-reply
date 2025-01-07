import { cn } from '@/lib/utils'
import React from 'react'
import BlocksShuffleTwo from './spinner'

type Props = {
    loading:boolean
    className?:string
    children: React.ReactNode
    colour?: string
}

const Loader = ({
    loading,
    className,
    children,
    colour
}: Props) => {
  return loading ? <div className={cn(className)}>
    <BlocksShuffleTwo color={colour}/>
  </div> : (
    children
  )
}

export default Loader