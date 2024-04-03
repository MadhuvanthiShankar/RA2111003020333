const axios = require('axios');
const numberUtils = require('../utils/numberUtils');


async function processNumberRequest(numberId) {
  try {
    
    const response = await axios.get('http://third-party-server/api/numbers');
    const fetchedNumbers = response.data;

    
    const qualifiedNumbers = numberUtils.filterAndProcessNumbers(numberId, fetchedNumbers);

    return {
      windowPrevState: numberUtils.getWindowPrevState(),
      windowCurrState: qualifiedNumbers,
      numbers: fetchedNumbers,
      avg: numberUtils.calculateAverage().toFixed(2)
    };
  } catch (error) {
    throw new Error('Failed to fetch numbers');
  }
}

module.exports = { processNumberRequest };
