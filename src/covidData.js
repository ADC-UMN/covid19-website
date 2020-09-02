
const superagent = require(`superagent`)

const { getAbbreviation } = require(`./states`)

const api = `https://api.covidtracking.com`

/**
 * @function getCurrentUS
 * @description
 *  Get the current numbers in the US
 */
const getCurrentUS = async () => {
  const res = await superagent.get(`${api}/v1/us/current.json`)
  const data = JSON.parse(res.text)
  return data
}

/**
 * @function getCurrentState
 * @description
 *  Get the current numbers in a certain US state
 *  TODO Part 1
 */
const getCurrentState = async (state) => {
  return {}
}

/**
 * @function getCurrentStates
 * @description
 *  Get the current numbers in all US states
 *  TODO Part 1
 */
const getCurrentStates = async () => {
  return {}
}

/**
 * @function getDailyUS
 * @description
 *  Get the daily numbers in the US since being recorded
 */
const getDailyUS = async () => {
  const res = await superagent.get(`${api}/v1/us/daily.json`)
  const data = JSON.parse(res.text)
  return data
}

/**
 * @function getDailyState
 * @description
 *  Get the daily numbers for a state since being recorded
 *  TODO Part 1
 */
const getDailyState = async (state) => {
  return {}
}

/**
 * @function getUSOnDate
 * @description
 *  Get the US numbers on a certain date
 *  TODO Part 1
 */
const getUSOnDate = async (date) => {
  return {}
}

/**
 * @function getStateOnDate
 * @description
 *  Get a state's numbers on a certain date
 *  TODO Part 1
 */
const getStateOnDate = async (state, date) => {
  return {}
}

/**
 * @function getUSDates
 * @description
 *  Get the start date and end date of the US' historical data to prevent bad http calls
 *  Data is already in order
 */
const getUSDates = async () => {
  const res = await superagent.get(`${api}/v1/us/daily.json`)
  const data = JSON.parse(res.text)
  const dates = {
    startDate: data[0].date,
    endDate: data[data.length-1].date
  }
  return dates
}

/**
 * @function getStateDates
 * @description
 *  Get the start date and end date of a state's historical data to prevent bad http calls
 *  Data is already in order
 *  TODO Part 1
 */
const getStateDates = async (state) => {
  return {}
}

module.exports = {
  getCurrentUS,
  getCurrentState,
  getCurrentStates,
  getDailyUS,
  getDailyState,
  getUSOnDate,
  getStateOnDate,
  getUSDates,
  getStateDates
}