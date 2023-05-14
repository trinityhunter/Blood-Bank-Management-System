import express  from 'express';
import { getBloodDonationForm, addBloodDonation } from '../controllers/donate_blood_form.js'

const router = express.Router();

router.get('/getBloodDonationForm', getBloodDonationForm)
router.post('/addBloodDonation', addBloodDonation)

export default router; 