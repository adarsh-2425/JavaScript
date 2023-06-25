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
  const userNameLength = jsonResponse.map(user => user.name.length);
  const totalLength = userNameLength.reduce((acc, val) => acc + val, 0);
  const avg = totalLength / userNameLength.length;
  console.log(avg);
}

getContent();
