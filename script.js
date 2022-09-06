const getAllPosts = async () => {
  let html = "";
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await response.json();
posts.forEach((post) => {
console.log(post)

    html += `<div class="post">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          </div>`;
  });
  document.querySelector('.wrapper').innerHTML=html;
};
getAllPosts();
