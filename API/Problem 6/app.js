const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

//1. Find all posts that have the userID value of 1:
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const user1Posts = posts.filter(post => post.userID === 1);
    console.log(user1Posts);
  });

//2. Find the post with the highest id value:
fetch(API_ENDPOINT)
  .then(response => response.json())
  .then(posts => {
      const highestId = posts.reduce((prev, curr) => prev.id > curr.id? prev : curr);
    console.log(highestId);
  })
  .catch(error => {
    console.log(error);
  })

//3. Find the average length of the body property for all posts:
fetch(API_ENDPOINT)
  .then(response => response.json())
  .then(posts => {
    const totalLength = posts.reduce((sum, post) => sum + post.body.length, 0);
    const avgLength = totalLength / posts.length;
    console.log(avgLength);
  })
  .catch(error => {
    console.log(error);
  })

//4. Find all posts that have the word "error" in the title property:
fetch(API_ENDPOINT)
  .then(response => response.json())
  .then(posts => {
    const postWithErrorTitle = posts.filter(post => post.title.includes('error'));
    console.log(postWithErrorTitle);
  })

//5. Create a new array of all post titles in uppercase:
fetch(API_ENDPOINT)
  .then(response => response.json())
  .then(posts => {
    const titleInUppercase = posts.map(post => post.title.toUpperCase());
    console.log(titleInUppercase);
  })

//6. Find all posts with IDs between 20 and 30, and log their titles to the console.
fetch(API_ENDPOINT)
  .then(response => response.json())
  .then(posts => {
    const ids20and30 = posts.filter(post => post.id >= 20 && post.id <= 30)
    .map(post => post.title);
    console.log(ids20and30);
  })
  .catch((error) => {
  console.log(error);
  })
