// /src/pages/CreatePost.js
import React from 'react';
import BlogPostForm from '../components/BlogPostForm/BlogPostForm';

const CreatePost = () => {
  const handleCreate = (newPost) => {
    console.log('Creating new post:', newPost);
  };

  return (
    <div>
      <h2>Create a New Blog Post</h2>
      <BlogPostForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreatePost;
