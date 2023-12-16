const  Doctor = require ("../models/doctor");
const jwt = require ('jsonwebtoken');


module.exports.home = async function(req, res){
    return res.send("Welcome to Hospital API!!");
}

module.exports.Register = async function(req, res){
    try{
        let doctorPresent = await Doctor.find({email: req.body.email});
        let doctorRegister = doctorPresent;
        if(doctorPresent.length == 0){
            doctorPresent = new Doctor(req.body);
            doctorRegister = await doctorPresent.save();
        }
        return res.json(200,{
            message:"Doctor Registered.",
            doctor:doctorRegister
        })
    }catch(error){
        console.log(error);
        return res.send("Registration failed.");
    }
}

module.exports.Login = async function token(req,res){
    try{
        const checkDoctor = await Doctor.findOne({email:req.body.email});
        if(checkDoctor){
            let token = jwt.sign(checkDoctor.toJSON(), 'hospitalApi',{
                expiresIn: 6000*6000
            });
            return res.json(200,{
                message:"Login Successfully!",
                token:token
            })
        }else{
            return res.send("Email or Password is incorrect!");
        }
    }catch(error){
        console.log(error);
        return res.send("Error in Login!");
    }
}