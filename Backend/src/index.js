import dotenv from 'dotenv'
import { app } from './app.js';

dotenv.config({
    path: './.env'
})

try {
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on PORT ${process.env.PORT || 8000}`);
    })
} catch (error) {
    console.log(error);
}