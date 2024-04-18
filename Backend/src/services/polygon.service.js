// These methods will mimic the fluctuations in real stock prices.

import { readDataFromFile, writeDataToFile } from "../utils/fileHandling.js"

const updatePrices = async () => {
    try {
        const data = await readDataFromFile('data/stocks.json');
    
        data?.stocks.forEach(element => {
            setInterval(() => {
                changePriceOfStock(element);
                writeDataToFile('data/stocks.json', data);
            }, element.refreshInterval);
        });
    } catch (error) {
        console.log("Error while updating the prices : ",error.message);
    }
}

const changePriceOfStock = (ele) => {

    const priceChange = Math.random() * 10 - 5; // Generate a random price change
    if (ele.o + priceChange > 0 && ele.o + priceChange<10000) {
        ele.o += priceChange;
    }
}

export { updatePrices }