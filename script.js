const wrapper = document.querySelector(".wrapper");

const getAllPosts = async () => {
  let html = "";
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await response.json();
  posts.forEach((post) => {
    // console.log(post);

    html += `<div class="post">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          </div>`;
  });
  wrapper.innerHTML = html;
};

document.querySelector(".wrapper").addEventListener("click", async (e) => {
  if (e.target.className === "post") {
    wrapper.innerHTML = `<div class="spinner"></div>`;
    const postId = e.target.dataset.id;
    console.log(postId);
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const response = await fetch(apiUrl);
    console.log(response);
    const singlePost = await response.json();
    wrapper.innerHTML = `<div class="single-post">
    <h1>${singlePost.title}</h1>
    <p>${singlePost.body}</p>
    <button class="show-all">show all posts</button></div>`;
  }
  // console.log(wrapper);
});
getAllPosts();
