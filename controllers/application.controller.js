const Application = require('../models/application.model.js');

exports.welcome = (req,res) => {
    res.json({"message":"Success. You've created your first express api service method."})
};

exports.createApplication = (req, res) => {
    if(JSON.stringify(req.body).length<=2){
        return res.status(400).send({
            message: "Request body empty"
        })
    }

    if((!req.body.applicationId) || (JSON.stringify(req.body.applicationId).length<=0)){
        return res.status(400).send({
            message: "Invalid application object"
        })
    }

    console.log("creating application");

    // Create a Note
    const application = new Application({
        applicationId: req.body.id, 
        status: req.body.status
    });

    res.send({"message":"application created"});
};

exports.findOne = (req,res) => {
    var appID = req.params.applicationId;
    res.json({"message":"application api - get method allows application lookups: " + appID})
};

exports.findAll = (req,res) => {
    res.json({"message":"application api - get all applications"})
}

