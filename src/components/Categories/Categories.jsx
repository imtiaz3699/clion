import React from 'react'
import { useUser } from '../../context/context'

function Categories() {
    const categories = ['']
    const {productCategories}  = useUser();
  return (
    <div className = 'w-full flex items-center justify-center mt-[72px] flex-col'>
        <div className = 'w-full text-center text-[30px] font-bold'>Shop With Categories</div>
    <div className = 'max-w-[1320px] w-full grid grid-cols-6 gap-3 mt-[40px]'>
        {
            productCategories?.data?.slice(0,6)?.map((element,idx)=> {
               return <div key = {element} className = 'border-[1px] hover:shadow-xl delay-100 transition-colors duration-150 border-gray-200 hover:border-gray-400 rounded-[5px] cursor-pointer text-center flex flex-col items-center justify-center p-4'>
                <div>
                    <img />
                </div>
                <p className = 'text-[20px] font-bold text-gray-600'>{element?.charAt(0)?.toUpperCase() + element?.slice(1)}</p>
            </div>
            })     
        }       
    </div>
    </div>
  )
}

export default Categories
