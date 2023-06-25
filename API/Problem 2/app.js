//retrieve name and email from api
const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const getContent = async () => {
  try {
    const response = await fetch(API_ENDPOINT);
    if (response.ok) {
      const jsonResponse = await response.json();
      processResponse(jsonResponse);
    } else {
    throw new Error('Request Failed!');
    }
  } catch(error) {
    console.log(error);
  }
}

const processResponse =  (jsonResponse) => {
  const details = jsonResponse.map(user => ({name: user.name, email: user.email}));
  console.log(details);
}

getContent();
