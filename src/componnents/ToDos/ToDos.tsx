import { useFormik } from 'formik'
import React, { useState } from 'react'
import { PopUp } from '../PopUp/PopUp'
import { Item } from './Items/Item'

interface Props{
  num?:number
}

interface initualValue{
  Title:string,
  Task:string
}

export const ToDos:React.FC<Props> = ({num}) => {
  const [title ,setTitle] = useState<Array<string>>([])
  const [data, setData] = useState<Array<{id:number,value:string,done:boolean}>>([])

  const formik = useFormik<initualValue>({
    initialValues:{
      Title:'',
      Task:''
    },
    onSubmit:(values)=>{
      
    } 
  })
  return (
    <>
        <div  className=' flex items-center flex-row-reverse m-7  h-16 w-[1440px] border-2 border-solid border-gray-300 rounded'>
            <div className='flex justify-center items-center'>
              
              <PopUp button={<button className='bg-green-400 h-12 w-28 text-white my-5'>Create</button>}>
                <form onSubmit={formik.handleSubmit} className='flex justify-around items-center flex-col'>
                  <input onChange={(e)=>formik.setFieldValue('Title',e.target.value)} className='p-2 border-2 border-gray-500 rounded outline-none ' type="text" />
                  <button onChange={()=>setTitle([...title,formik.values.Title])} type='submit' className='bg-green-400 h-12 w-28 text-white my-5'>Створити</button>
                </form>
              </PopUp>
            </div>
            <div className='flex flex-row items-center justify-start'>
              {title.map((value)=><Item num={value} key={value}/> )}
            </div>
        </div>
        <div className=' m-7 h-screen w-[1440px] border-2 border-solid border-gray-300 rounded'>
          <PopUp button={<button className='text-8xl text-center rounded-lg text-white border-2 border-gray-300 m-5 w-[250px] h-[250px]'>+</button>}>
            <form onSubmit={formik.handleSubmit}>
              <input onChange={(e)=>formik.setFieldValue('',e.target.value)} type='text'/>
              <button onChange={()=>setData([...data,{id:1,value:formik.values.Task,done:false}])} type="submit">Створити</button>
            </form>
          </PopUp>
        </div>
    </>
  )
}
