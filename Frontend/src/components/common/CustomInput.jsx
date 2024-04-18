import React, { useState } from 'react'
import { GoPlus, GoDash } from "react-icons/go";
import Loader from './Loader';
import { fetchStockData } from '../../services/api';
import { useCustomContext } from '../../context/context';

const CustomInput = ( { setVisible } ) => {
    const { count, setStockData, setCount, setPriceDiff } = useCustomContext();

    const [isLoading,setIsLoading] = useState(false);
    
    let minValue = 1, maxValue = 20
    
    const handleIncDec = (num) => {
        if((count+num)>=minValue && (count+num)<=maxValue)
            setCount((count) => count + num);
    }

    const handleChange = ( e ) => {
        if(Number(e.target.value)>=minValue && Number(e.target.value)<=maxValue){
            setCount(Number(e.target.value))
        }
    }

    const getStockData = async () => {
        setIsLoading(true);
        const response = await fetchStockData(count);
        setStockData(response.data);
        setPriceDiff(new Array(count).fill(0));
        setIsLoading(false);
        setVisible(false);
    }

    return (
        <div className='flex_center flex-col'>
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter the number of stocks you want to see (1-20)</label>
            <div className="relative flex items-center max-w-[8rem] mt-3 mb-10">
                <button onClick={()=>{handleIncDec(-1)}} className="rounded-s-lg p-3 h-11 bg-gray-700 border-r border-gray-600 outline-none">
                    <GoDash />
                </button>

                <input onChange={handleChange} type="number" className="outline-none text-gray-200 h-11 text-center text-sm bg-gray-700 w-full " placeholder="10" required value={count} />

                <button onClick={()=>{handleIncDec(1)}} className="rounded-e-lg p-3 h-11 bg-gray-700 border-l border-gray-600  outline-none">
                    <GoPlus />
                </button>
            </div>
            {
                isLoading? (
                    <Loader/>
                    ):(
                    <button onClick={getStockData} className='bg-slate-800 rounded-md px-10 py-2 text-sm'>View Stocks Prices</button>
                )
            }
        </div>
    )
}

export default CustomInput