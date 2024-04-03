const numbersService = require('../services/numbersService');


async function handleNumberRequest(req, res) {
  const numberId = req.params.numberId;
  try {
    const response = await numbersService.processNumberRequest(numberId);
    res.status(200).json(response);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { handleNumberRequest };
