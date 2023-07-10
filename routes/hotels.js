import express from 'express';
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//Create
router.post('/', verifyAdmin, createHotel);
//update
router.put('/:id', verifyAdmin, updateHotel)
//delete
router.delete('/:id', verifyAdmin, deleteHotel)
//Get
router.get('/find/:id', getHotel)
//Get all
router.get('/', getAllHotels)

//count
router.get('/countByCity', countByCity)

router.get('/countByType', countByType)



export default router