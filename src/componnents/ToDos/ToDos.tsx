import React, { useState } from 'react'

interface Props {
  label?:string,
}


export const ToDos:React.FC<Props> = ({label}) => {
  const [ state ,setState ] = useState<number>()
  const ref = React.useRef<HTMLButtonElement>(null)
  
  return (
    <>
        <div  className=' flex flex-row-reverse m-7  h-16 w-[1440px] border-2 border-solid border-gray-300 rounded'>
            <div>

            </div>
            <div>
                <button ref={ref} className='bg-green-400 h-12 w-28 text-white'>Створити</button>
            </div>
        </div>
        <div className=' m-7 h-screen w-[1440px] border-2 border-solid border-gray-300 rounded'>

        </div>
    </>
  )
}
