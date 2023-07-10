import express from 'express';
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//Create
router.post('/:hotelid', verifyAdmin, createRoom);
//update
router.put('/:id', verifyAdmin, updateRoom)
//delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)
//Get
router.get('/:id', getRoom)
//Get all
router.get('/', getAllRooms)

export default router