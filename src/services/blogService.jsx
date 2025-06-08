// export const fetchPosts = () => {
//   return fetch('/api/posts').then((response) => response.json());
// };

// export const fetchPost = (id) => {
//   return fetch(`/api/posts/${id}`).then((response) => response.json());
// };

// export const createPost = (postData) => {
//   return fetch('/api/posts', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(postData),
//   }).then((response) => response.json());
// };

// export const updatePost = (id, postData) => {
//   return fetch(`/api/posts/${id}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(postData),
//   }).then((response) => response.json());
// };

// export const deletePost = (id) => {
//   return fetch(`/api/posts/${id}`, {
//     method: 'DELETE',
//   }).then((response) => response.json());
// };


// /src/services/blogService.js

// Mock API call functions for creating, fetching, and updating blog posts
const fetchPosts = () => {
  return [
    { id: 1, title: 'First Post', content: 'This is the first blog post.', author: 'John', date: '2025-06-01' },
    { id: 2, title: 'Second Post', content: 'This is the second blog post.', author: 'Jane', date: '2025-06-02' },
    { id: 3, title: 'Third Post', content: 'This is the third blog post.', author: 'Alice', date: '2025-06-03' },
  ];
};

const createPost = (newPost) => {
  console.log('Creating post...', newPost);
  return { ...newPost, id: Date.now() }; // Mock post creation
};

const updatePost = (id, updatedPost) => {
  console.log('Updating post...', id, updatedPost);
  return { ...updatedPost, id }; // Mock post update
};

export default { fetchPosts, createPost, updatePost };
