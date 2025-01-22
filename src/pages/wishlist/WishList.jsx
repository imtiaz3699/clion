import React from 'react'
import CustomBreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import WishListTable from '../../components/Tables/WishListTable'

function WishList() {
  return (
    <div className = 'flex flex-col items-center gap-[72px] '>
    <div className="bg-[#F2F4F5] h-[72px] w-full flex items-center justify-center">
        <div className="max-w-[1320px] w-full">
          <CustomBreadCrumb />
        </div>
      </div>
      <div className= 'max-w-[1320px] w-full border-[1px] border-gray-200 '>
        <p className ='text-[20px] font-medium text-gray-900 p-6'>Wish List</p>
        <WishListTable/>
      </div>
    </div>
  )
}

export default WishList
