import axios from 'axios'

const fetchStockData = async (count) => {
    let url = `${import.meta.env.VITE_SERVER_URL}/api/v1/stocks/getStocks/${count}`
    
    const response = await axios.get(url);
    
    return response.data;
}

export { fetchStockData }