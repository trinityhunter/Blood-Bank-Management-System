import request_blood_form from '../models/request_blood_form.js'

export const getBloodRequestForm = async(req, res) => {

    try{
        const allBlood = await request_blood_form.find();
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

export const addBloodRequest = async(req, res) => {

    const newBlood = new request_blood_form(req.body);

    try{
        
        await newBlood.save();
        res.status(200).json("Added a new Blood Request Form Successfully")

    }
    catch(error){
        res.status(404).json({ message: error.message });
    }

}