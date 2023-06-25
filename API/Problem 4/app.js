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

//using reduce
const processResponse =  (jsonResponse) => {
  const longest = jsonResponse.reduce((acc, user) => {
    if (user.name.length > acc.name.length) {
      return user;
    } else {
      return acc;
    }
  }, jsonResponse[0]);
  console.log(longest.name.length);
}

getContent();
