import React from 'react'
import { useFormik } from 'formik'
import { PopUp } from '../PopUp/PopUp'
import { Task } from '../ToDos/Items/Task'

interface initualValue{
    Task:string
}

export const Tasks = () => {
    const [data, setData] = React.useState<Array<{id:number,value:string,done:boolean}>>([])

    const formik = useFormik<initualValue>({
      initialValues:{
        Task:''
      },
      onSubmit:(values)=>{
        setData([...data,{id:data.length + 1,value:formik.values.Task,done:false}])
      } 
    })
    return (
        <div className=' m-7 h-screen w-[1440px] border-2 border-solid border-gray-300 rounded flex flex-row-reverse'>
          <PopUp button={<button className='text-8xl text-center rounded-lg text-white border-2 border-gray-300 m-5 w-[250px] h-[250px]'>+</button>}>
            <form onSubmit={formik.handleSubmit} className='flex justify-around items-center flex-col'>
              <input onChange={(e)=>formik.setFieldValue('Task',e.target.value)} type='text' className='p-2 border-2 border-gray-500 rounded outline-none '/>
              <button type='submit' className='bg-green-400 h-12 w-28 text-white my-5'>Створити</button>
            </form>
          </PopUp>
          <div className='flex flex-row flex-wrap'>
            {data.map((value)=><Task  key={value.id} done={value.done} value={value.value} />)}
          </div>
        </div>
  )
}
