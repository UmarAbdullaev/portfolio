fetch('data/posts.json')
  .then(response => response.json())
  .then(posts => {
    const postList = document.getElementById('postList');

    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      // Make the div itself clickable
      const link = document.createElement('a');
      link.href = post.link;
      link.target = "_blank"; // Open in a new tab
      link.classList.add('post-link'); // Optional: add a class for styling

      // Append content inside the link
      const title = document.createElement('p');
      title.classList.add('header');
      title.textContent = post.title;

      const desc = document.createElement('p');
      desc.classList.add('content');
      desc.textContent = post.description;

      link.appendChild(title);
      link.appendChild(desc);

      // Append the link to the postDiv
      postDiv.appendChild(link);
      postList.appendChild(postDiv);
    });
  })
  .catch(error => {
    console.error('Error loading posts:', error);
  });
