const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

//1. Write a POST request that creates a new post with userId=5, title="My First Post", and body="This is my first post on JSONPlaceholder".
fetch(API_ENDPOINT, {
  method: 'POST',
  body: JSON.stringify({
    userId: 5,
    title: 'My first post',
    body: 'This is my first post on JSONPlaceholder'
  }),
  headers: {
    'content-type': 'application/JSON; chardet = UTF-8'
  },
})
.then(response => response.json())
.then(data => {
  console.log('New post created: ', data);
  return fetch(API_ENDPOINT + data.id);
})
.catch(error => console.log(error));
