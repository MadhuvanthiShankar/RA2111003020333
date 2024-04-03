
const axios = require('axios');

const registrationData = {
  companyName: 'abcde',
  ownerName: 'Madhuvanthi',
  rollNo: 'RA2111003020333',
  ownerEmail: 'ms3386@srmist.edu.in',
  accessCode: 'bntKpm'
};


async function registerForTest() {
  try {
    const response = await axios.post('http://20.244.56.144/test/register', registrationData);
    console.log('Registration successful!');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Registration failed:', error.message);
  }
}


registerForTest();
