let { genSalt, uniqBy, compareSalt } = require('../helpers.js')

const Lead = require('../models/lead.model')

exports.test = (req, res) => {
  res.send('Olá, Lead')
}

exports.create = (req, res) => {
  const { owner, email, name, phone } = req.body
  let lead = null
  Lead.findOne({ owner: owner, email: email }, (err, lead_) => {
    if (!lead_) {
      lead = new Lead({
        owner: owner,
        name: name,
        email: email,
        phone: phone,
      })
      lead.save(err => {
        if (err) res.status(500).send(err)
      })
    }
  })
  res.status(200).send(lead)
}

exports.list = (req, res) => {
  console.log(req, res)
  const { owner } = req.body
  compareSalt(owner.email, owner.psw).then(result => {
    console.log(result)
    ;(result &&
      Lead.find({ owner: owner.email }, (err, leads_) => {
        res.status(200).send(uniqBy(leads_, JSON.stringify))
      })) ||
      res.status(404).send([])
  })
  res.status(204)
}

exports.s = (req, res) => {
  const { owner } = req.body
  genSalt(owner).then(result => {
    res.status(200).send(result)
  })
}
