const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

const getData = async () => {
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

const processResponse = jsonResponse => {
  const completedTasks = jsonResponse.filter(task => task.completed)
  .map(task => task.title)
  .slice(0, 10);
  console.log(completedTasks);
}

getData();
