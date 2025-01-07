import Loader from '@/components/ui/loader'
import React from 'react'

type Props = {}

const LoadingPage = (props: Props) => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <Loader loading>...Loading</Loader>
    </div>
  )
}

export default LoadingPage