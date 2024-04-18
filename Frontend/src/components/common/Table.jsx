import React, { useEffect } from 'react'
import StockCard from '../cards/StockCard'
import { useCustomContext } from '../../context/context'
import { fetchStockData } from '../../services/api';

const Table = () => {
  const { count, stockData, setStockData, priceDiff, setPriceDiff } = useCustomContext();

  const shortPolling = async () => {
    const response = await fetchStockData(count);
    let temp = []
    for(let i=0;i<count;i++){
      temp.push(Number(response.data[i].o)-Number(stockData[i].o));
    }
    setPriceDiff(temp);
    setStockData(response.data);
  }

  useEffect(() => {
    const interval = setInterval(shortPolling, 1000);

    return () => {
      clearInterval(interval);
    }
  })
  

  return (
    <div className='w-full lg:w-4/5 h-full glass_card flex flex-col p-2'>
      <div className='flex border border-gray-600 rounded-full'>
        <label className='py-2 px-4 w-16 border-r border-gray-700 hidden lg:block'>S.no</label>
        <label className='py-2 px-4 flex-grow text-xs lg:text-base'>Company name</label>
        <label className='p-2 stock_card border-l border-gray-600 text-center hidden lg:block lg:text-base'>Currency</label>
        <label className='px-1 py-2 stock_card lg:text-base'>Open Price</label>
        <label className='px-1 py-2 stock_card lg:text-base'>Change</label>
      </div>
      <div className='w-full h-fit  rounded-lg  mt-1 overflow-auto'>
        {
          stockData.map((value,index)=>
            <StockCard key={index} data={value} index={index} diff={priceDiff[index]} />
          )
        }
      </div>
    </div>
  )
}

export default Table