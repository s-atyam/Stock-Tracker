import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { updatePrices } from './services/polygon.service.js'

const app = express()

dotenv.config({
    path: './.env'
})

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        methods: ['GET'],
        credentials: true
     
    }
))

// these middleware configuration is for reciving different types of data
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static('public'))

updatePrices();

// routes import
import stocksRoute from './routes/stock.routes.js'
app.use("/api/v1/stocks", stocksRoute);

export { app }