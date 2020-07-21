var Lead = require('../models/lead.model')

exports.test = (req,res) => {
    res.send('Olá, Lead')
}

exports.create = (req,res) => {
    const {owner, email, name, phone} = req.body
    let lead = null
    Lead.findOne({owner:owner, email:email}, (err, lead_) => {
        if(!lead_){
            lead = new Lead({
                owner: owner,
                name: name,
                email: email,
                phone: phone,
            })
            lead.save(err => {
                if(err)
                    res.status(500).send(err)
            })
        }
    })
    res.status(200).send(lead)    
}

exports.list = (req,res) => {
    const {owner} = req.body
    owner && 
    Lead.find({owner}, (err, leads_) => {
        res.status(200).send([leads_])
    })
    
}