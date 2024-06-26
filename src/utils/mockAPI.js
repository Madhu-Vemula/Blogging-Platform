const mockAPI = {
  getPosts: () => JSON.parse(localStorage.getItem("posts")) || [],
  savePosts: (posts) => localStorage.setItem("posts", JSON.stringify(posts)),
  getPostById: (id) => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const postid = parseInt(id);
    const wantedpost = posts.find((post) => post.id === postid);
    return wantedpost;
  },
  addPost: (post) => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
  },
  updatePost: (updatedPost) => {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    localStorage.setItem("posts", JSON.stringify(posts));
  },
  deletePost: (id) => {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts = posts.filter((post) => post.id !== id);
    localStorage.setItem("posts", JSON.stringify(posts));
  },
};

export default mockAPI;
