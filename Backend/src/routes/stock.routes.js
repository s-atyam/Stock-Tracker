import { Router } from 'express'
import { getStockData } from '../controllers/stock.controllers.js'

const router = Router();

// unsecured route
router.route("/getStocks/:count").get(getStockData);

export default router;