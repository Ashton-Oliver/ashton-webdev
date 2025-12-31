fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const list = document.querySelector('.post-list');
    list.innerHTML = posts.map(post => `
      <article class="post-item">
        <time datetime="${post.date}">${post.date}</time>
        <h3><a href="#">${post.title}</a></h3>
        <a class="text-link" href="#">Continue reading</a>
      </article>
    `).join('');
  });


  
