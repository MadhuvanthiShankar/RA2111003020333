const axios = require('axios');


async function getAuthorizationToken(clientID, clientSecret) {
  try {
    
    const authTokenData = {
      companyName: 'abcde', 
      clientID: '98ccc88e-0956-4a21-a620-42506df79f4c',
      clientSecret: 'vUqsNuItniVzaTOP',
      ownerName: 'Madhuvanthi',
      ownerEmail: 'ms3386@srmist.edu.in',
      rollNo: 'RA2111003020333'
    };

    const response = await axios.post('http://20.244.56.144/test/auth', authTokenData);
    console.log('Authorization Token obtained successfully!');
    console.log('Token:', response.data);
  } catch (error) {
    console.error('Failed to obtain Authorization Token:', error.message);
  }
}


getAuthorizationToken('yourClientID', 'yourClientSecret');
