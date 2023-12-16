const mongoose = require('mongoose');

const report = new mongoose.Schema({
    createdBy:{
        type:String,
        ref:'Doctor',
        require:true,
    },
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    },
    status:{
        type:String,
        enum:['Negative', 'Positive-Admit', 'Symptoms-Quarantine', 'Travelled-Quarantine'],
        require:true,
        ref:'Patient'
    },
    createdOn:{
        type:Date,
        default:Date.now()
    }
}, {timestamps:true});

const Report = mongoose.model('Report',report);
module.exports = Report;