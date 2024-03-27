document.addEventListener('DOMContentLoaded', function () {
  fetchPosts();
});

function fetchPosts() {
  fetch('posts.json')
      .then(response => response.json())
      .then(posts => {
          const postList = document.getElementById('post-list');
          posts.forEach(post => {
              const li = document.createElement('li');
              const a = document.createElement('a');
              a.textContent = post.title;
              a.href = post.url;
              li.appendChild(a);
              postList.appendChild(li);
          });
      });
}
