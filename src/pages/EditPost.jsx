// /src/pages/EditPost.js
import React, { useState, useEffect } from 'react';
import BlogPostForm from '../components/BlogPostForm/BlogPostForm';

const EditPost = ({ match }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postId = match.params.id;
    // Mock data for editing post
    const posts = [
      { id: 1, title: 'First Post', content: 'This is the first blog post.', author: 'John', date: '2025-06-01' },
      { id: 2, title: 'Second Post', content: 'This is the second blog post.', author: 'Jane', date: '2025-06-02' },
      { id: 3, title: 'Third Post', content: 'This is the third blog post.', author: 'Alice', date: '2025-06-03' },
    ];
    setPost(posts.find(p => p.id === Number(postId)));
  }, [match.params.id]);

  const handleEdit = (updatedPost) => {
    console.log('Editing post:', updatedPost);
  };

  return (
    <div>
      <h2>Edit Blog Post</h2>
      {post && <BlogPostForm post={post} onSubmit={handleEdit} />}
    </div>
  );
};

export default EditPost;
