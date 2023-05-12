const postList = document.getElementById('post-list');
const postForm = document.getElementById('post-form');

// GET request
fetch('/posts')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      const li = document.createElement('li');
      li.textContent = post.title;
      postList.appendChild(li);
    });
  });

// POST request
postForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const post = {
    title: formData.get('title'),
    body: formData.get('body')
  };
  fetch('http:/localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(response => response.text())
    .then(message => {
      alert(message);
      postForm.reset();
    });
});
