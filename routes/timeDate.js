
const timeDate = require(`../src/timeDate`)

const express = require('express')
const router = express.Router()

router.get('/today', async function(req, res) {
  console.log(`timeDate: Get Todays Date...`)
  
  const today = await timeDate.getToday()
  res.send(today)
})

module.exports = router