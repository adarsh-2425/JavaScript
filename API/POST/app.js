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

/*4. Write a POST request that creates a new post with userId=7, title="My Favorite Recipe", 
and body="I love to cook and this is one of my all-time favorite recipes. Give it a try and let me know what you think!"*/

fetch(API_ENDPOINT, {
  method: 'POST',
  body:  JSON.stringify({
    userId: 7,
    title: 'My Favorite Recipe',
    body: "I love to cook and this is one of my all-time favorite recipes. Give it a try and let me know what you think!"
  }),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
})
.then(response => response.json())
.then(data => {
  console.log('Newly created data is:', data)
})
.catch(error => console.log(error));

/*5. Write a POST request using async..await that creates a new post with userId=4, title="My Coding Journey", and body="I've been learning to code for the past year and it's been an incredible journey. Here are some of the things I've learned along the way."*/

const createNewPost = async (userId, title, body) => {
  try{
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({userId, title, body}),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    });
    if(response.ok) {
      const data = await response.json();
      console.log('New post created:', data);
    } else {
      throw new Error('Cannot create new post')
    }
  } catch (error) {
    console.log(error);
  }
}

createNewPost(4, "My Coding Journey", "I've been learning to code for the past year and it's been an incredible journey. Here are some of the things I've learned along the way.");
