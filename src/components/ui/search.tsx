import { SearchIcon } from 'lucide-react'
import React from 'react'
import { Input } from './input'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className='hidden lg:flex overflow-hidden gap-x-2 border-2 border-[#3352cc] rounded-full px-4 py-1 items-center flex-1 flex-grow'>
        <SearchIcon color='#3352cc'/>
        <Input placeholder='Search Placeholder' className='border-none outline-none ring-0 focus:ring-0 flex-1'/>
    </div>
  )
}

export default Search