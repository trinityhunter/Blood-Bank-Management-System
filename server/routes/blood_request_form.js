import express  from 'express';
import { getBloodRequestForm, addBloodRequest } from '../controllers/request_blood_form.js'

const router = express.Router();

router.get('/getBloodRequestForm', getBloodRequestForm)
router.post('/addBloodRequest', addBloodRequest)

export default router; 