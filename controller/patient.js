//const jwt = require ('jsonwebtoken');
const  Patient = require ('../models/patient');
 
module.exports.register = async function(req, res){
    try{
        let checkPatient = await Patient.find({
            phone:req.body.phone
        });
        if(checkPatient && checkPatient.length > 0){
            return res.send(checkPatient);
        }else{
            checkPatient = new Patient(req.body);
            let addPatient = await checkPatient.save();
            //let token = jwt.sign(addPatient, {id:ObjectId});
            return res.send(addPatient);
        }
    }catch(error){
        console.log(error);
        return res.send('Error in register!');
    }
}