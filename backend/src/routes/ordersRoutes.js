import { Router } from 'express';
import {
  createOrder,
  getOrders,
  updateOrderStatus
} from '../controllers/ordersController.js';

const router = Router();

router.get('/', getOrders);
router.post('/', createOrder);
router.patch('/:id/status', updateOrderStatus);
router.patch('/:id', updateOrderStatus);
router.put('/:id/status', updateOrderStatus);

export default router;

