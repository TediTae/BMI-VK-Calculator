const express = require('express')
const router = express.Router()
const User = require('../models/Hesaplama')
var mongo = require('mongodb');

router.get('/Hesaplama', (req, res) => {
    res.render('site/hesaplama')
  })

router.post('/Hesaplama', (req, res) => {
    Hesaplama.create(req.body)
     
    })

    module.exports = router