import donate_blood_form from '../models/donate_blood_form.js'
import users from '../models/auth.js'

export const getBloodDonationForm = async(req, res) => {

    try{
        const allBlood = await donate_blood_form.find();
        const allBloodDetails = []
        allBlood.forEach(items => {
            allBloodDetails.push({ type: items.type, amount: items.amount, disease: items.disease })
        })
        res.status(200).json(allBloodDetails);
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }

}

export const addBloodDonation = async(req, res) => {

    
    try{
        const existingUser = await users.findOne(req.body[0]);
    
        if(!existingUser){
            res.status(404).json({ error: "User not found" });
            return;
        }

        const arr = existingUser.donate;

        arr.push(req.body[1]);

        const user = {
            name: existingUser.name,
            email: existingUser.email,
            password: existingUser.password,
            request: existingUser.request,
            donate: arr
        }
        
        await user.save();
        res.status(200).json("Added a new Blood Donation Form Successfully")

    }
    catch(error){
        res.status(404).json("Internal Server Error");
    }

}