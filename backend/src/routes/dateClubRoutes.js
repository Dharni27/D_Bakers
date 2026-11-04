import { Router } from 'express';
import {
  registerDateClub,
  getDateClubMembers,
  getUpcomingCelebrations
} from '../controllers/dateClubController.js';

const router = Router();

router.get('/', getDateClubMembers);
router.post('/', registerDateClub);
router.get('/upcoming', getUpcomingCelebrations);

export default router;
