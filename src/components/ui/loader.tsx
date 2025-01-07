import { cn } from '@/lib/utils'
import React from 'react'
import BlocksShuffleTwo from './spinner'

type Props = {
    loading:boolean
    className?:string
    children: React.ReactNode
    color?: string
}

const Loader = ({
    loading,
    className,
    children,
    color
}: Props) => {
  return loading ? <div className={cn(className)}>
    <BlocksShuffleTwo color={color}/>
  </div> : (
    children
  )
}

export default Loader