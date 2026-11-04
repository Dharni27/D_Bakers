import { Router } from 'express';
import {
  createQuote,
  getQuotes,
  updateQuoteStatus
} from '../controllers/quotesController.js';

const router = Router();

router.get('/', getQuotes);
router.post('/', createQuote);
router.patch('/:id/status', updateQuoteStatus);
router.patch('/:id', updateQuoteStatus);
router.put('/:id/status', updateQuoteStatus);

export default router;

