import express from 'express';
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.js';

const router = express.Router();

//Create
router.post('/', createHotel);
//update
router.put('/:id', updateHotel)
//delete
router.delete('/:id', deleteHotel)
//Get
router.get('/:id', getHotel)
//Get all
router.get('/', getAllHotels)

export default router