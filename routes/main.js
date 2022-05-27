const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('site/index')
})

router.get('/Readmore', (req, res) => {
  res.render('site/Readmore')
})

router.get('/beslenme', (req, res) => {
  res.render('site/beslenme')
})

router.get('/boyyas', (req, res) => {
  res.render('site/boyyas')
})

router.get('/iletisim', (req, res) => {
  res.render('site/iletisim')
})

router.get('/hesaplama', (req, res) => {
  res.render('site/hesaplama')
})

router.get('/Obezite', (req, res) => {
  res.render('site/Obezite')
})

router.get('/sorular', (req, res) => {
  res.render('site/sorular')
})

router.get('/tip12', (req, res) => {
  res.render('site/tip12')
})


module.exports = router