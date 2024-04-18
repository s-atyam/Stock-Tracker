import React from 'react'
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const StockCard = (props) => {
  const { name, currency_name, o} = props.data;
  return (
    <div className='w-full h-9 my-2 flex'>
      <label className='w-16 my-auto pl-5 border-r border-gray-700 hidden lg:block text-xs lg:text-sm'>{props.index+1}</label>
      <label className='flex-grow my-auto pl-4 text-xs xl:text-sm'>{name}</label>
      <label className='stock_card text-center hidden lg:block lg:text-base'>{currency_name}</label>
      <label className='stock_card text-center text-xs lg:text-sm' >{o.toFixed(3)}</label>
      <label className='stock_card flex justify-center'>
        {
          Number(props.diff)===0?(
            <span>-</span>
          )
           : Number(props.diff)<0?(
            <span className='text-red-500 flex_between w-11/12 lg:w-3/5 text-xs lg:text-sm'><FaArrowDown/> {Number(props.diff).toFixed(3)}</span>
          ):(
            <span className='text-green-500 flex_between w-11/12 lg:w-3/5 text-xs lg:text-sm'><FaArrowUp/> {Number(props.diff).toFixed(3)}</span>
          )
        }
      </label>
    </div>
  )
}

export default StockCard