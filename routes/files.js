
const express = require('express')
const path = require(`path`)
const router = express.Router()

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../html', 'us.html'))
})

// TODO Part 1
// Add a get for the webpage style "website.css"

router.get('/website.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../html', 'website.js'))
})

// TODO Part 1
// Add a get for the webpage data "states.json"

module.exports = router