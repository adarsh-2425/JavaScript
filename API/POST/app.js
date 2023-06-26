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

/*2. Write a POST request that creates a new post with userId=3, title="New Blog Idea", 
and body="I'm thinking about starting a new blog. What do you think I should write about?"*/

fetch(API_ENDPOINT, {
  method: 'POST',
  body: JSON.stringify({
    userId: 3,
    title: 'New Blog Idea',
    body: "I'm thinking about starting a new blog. What do you think I should write about?"
  }),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
})
.then(response => response.json())
.then(data => {
  console.log('New Post Created: ', data);
})
.catch(error => console.log(error));

/*3. Write a POST request that creates a new post with userId=2, title="My Travel Adventure", 
and body="I just got back from a trip to Europe and it was amazing! Here are some of my favorite moments."*/

fetch(API_ENDPOINT, {
  method: 'POST',
  body: JSON.stringify({
    userId: 2,
    title: 'My Travel Adventure',
    body: "I just got back from a trip to Europe and it was amazing! Here are some of my favorite moments."
  }),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
})
.then(response => response.json())
.then(data => {
  console.log('New post created:', data)
})
.catch(error => console.log(error));
