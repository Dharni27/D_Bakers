import { Router } from 'express';
import {
  getEvents,
  subscribeAlert,
  getAlertSubscribers
} from '../controllers/eventsController.js';

const router = Router();

router.get('/', getEvents);
router.post('/subscribe', subscribeAlert);
router.get('/subscribers', getAlertSubscribers);

export default router;
