import React from 'react'
import { PopUp } from '../PopUp/PopUp'
import { useFormik } from 'formik'
import { Item } from '../ToDos/Items/Item'

interface initualValue{
  Title:string,
}

export const Titles = () => {
  const [title ,setTitle] = React.useState<Array<string>>([])

  const formik = useFormik<initualValue>({
    initialValues:{
      Title:'',
    },
    onSubmit:(values)=>{
      setTitle([...title,values.Title])
    } 
  })
  return (
    <div  className=' flex items-center flex-row-reverse m-7  h-16 w-[1440px] border-2 border-solid border-gray-300 rounded'>
      <div className='flex justify-center items-center'>
        <PopUp button={<button className='bg-green-400 h-12 w-28 text-white my-5'>Create</button>}>
          <form onSubmit={formik.handleSubmit} className='flex justify-around items-center flex-col'>
            <input onChange={(e)=>formik.setFieldValue('Title',e.target.value)} className='p-2 border-2 border-gray-500 rounded outline-none ' type="text" />
            <button type='submit' className='bg-green-400 h-12 w-28 text-white my-5'>Створити</button>
          </form>
        </PopUp>
      </div>
      <div className='flex flex-row items-center justify-start'>
        {title.map((value)=><Item num={value} key={value}/> )}
      </div>
    </div>
  )
}
