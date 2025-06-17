import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BlogPostForm from './BlogPostForm';

const BlogPostEdit = ({ posts, onEdit }) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === postId);

  if (!post) return <p>Post not found.</p>;

  const handleEdit = (data) => {
    onEdit(postId, data);
    navigate(`/posts/${postId}`);
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <BlogPostForm post={post} onSubmit={handleEdit} />
    </div>
  );
};

export default BlogPostEdit;
