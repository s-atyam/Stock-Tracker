import fs from 'fs'

const readDataFromFile = (filename) => {
    try {
        const data = fs.readFileSync(filename,'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading from ${filename}:`, error);
        return null;
    }
}

const writeDataToFile = (filename, data) => {
    try {
        fs.writeFileSync(filename, JSON.stringify(data));
    } catch (error) {
        console.error(`Error writing to ${filename}:`, error);
    }
}

export { 
    readDataFromFile,
    writeDataToFile
 }