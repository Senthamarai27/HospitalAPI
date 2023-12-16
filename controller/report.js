const  Report = require ("../models/report.js");

//Report creating
module.exports.createReport  = async function(req, res){
    try{
        let report = await Report.find(req.body);
        if(report && report.length >0){
            return res.send(report);
        }else{
            report = new Report(req.body);
            let reportCreated = await report.save();
            return res.send(reportCreated);
        }
    }catch(error){
        console.log(error);
        return res.send("Report not generated.");
    }
}
// find all reports of patient using patientId
module.exports.allReport = async function(req, res){
    try{
        const patientId = req.params.id;
        const allReport = await Report.find({patientId: patientId});
        return res.send(allReport);
    }catch(error){
        return res.send('Report Not found.');
    }
}


//search status
module.exports.status = async function(req, res){
    try{
        const status = req.params.status;
        const result = await Report.find({status:status});
        return res.json(200, {results:result});
    }catch(error){
        return res.send(error);
    }
}

// const Report = require('../models/report');

// //generate report bases on status
// //status: Postive Negative Quarantine Travelled
// module.exports.status = async (req, res) =>{

//   try{
//     let report = await Report.find({status: req.params.status})
//     .populate({
//       path: 'patient',
//       select: 'name city phone'
//     })
//     .populate({
//       path: 'doctor',
//       select: 'name _id'
//     });

//     //console.log(report);
//     if(report && report.length !== 0){
//       return res.status(200).json({
//         message:`List of all the reports with ${req.params.status}`,
//         reports: report,
//       });
//     }else{
//       return res.status(422).json({
//         message: `There are no such patients with ${req.params.status} status`
//       })
//     }

//   }catch(err){
//     console.log(err.message);
//     return res.status(500).json({
//       message: 'Internal Server Error'
//     });
//   }
// }