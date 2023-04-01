import React from 'react'

interface Props{
  value:string,
  done:boolean
}

export const Task:React.FC<Props> = ({value,done}) => {
  return (
    <div className=' bg-white text-center rounded-lg border-2 border-gray-300 m-5 w-[250px] h-[250px] '>
      <div>
        {value}
      </div>
      <div>
        <button disabled={done}>done</button>
      </div>
    </div>
  )
}
