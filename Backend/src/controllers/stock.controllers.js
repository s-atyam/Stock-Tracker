import { asyncHandler } from '../utils/asyncHandler.js'
import { readDataFromFile } from '../utils/fileHandling.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'

const getStockData = asyncHandler( async (req, res)=>{
    try {
        const { count } = req.params;
        const data = readDataFromFile('data/stocks.json');
        
        return res
        .status(200)
        .json( new ApiResponse(200, data?.stocks?.slice(0,count), "stocks fetched successfully"));

    } catch (error) {
        throw new ApiError(500, error.message || "Something went wrong while fetching the stocks data");
    }
})

export { getStockData }