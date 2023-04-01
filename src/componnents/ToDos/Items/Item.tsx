import React from 'react'

interface Props{
  num:string
}

export const Item:React.FC<Props> = ({num}) => {
  return (
    <div className='bg-gray-100 h-12 m-3 min-w-[100px] rounded text-center  border-2 hover:border-blue-300'>
        {num}
    </div>
  )
}
