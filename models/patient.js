const mongoose = require ('mongoose');
const patient = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    reports:[
        {
            type:String,
            ref:'Report'
        }
    ]
}, {timestamps:true});

const Patient = mongoose.model('Patient',patient);
module.exports = Patient;