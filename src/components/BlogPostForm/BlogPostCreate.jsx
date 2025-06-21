import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogPostForm from './BlogPostForm';

const BlogPostCreate = ({ onCreate }) => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleCreate = (data) => {
    setSubmitting(true);
    onCreate(data);
    setSubmitting(false);
    navigate('/');
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <BlogPostForm onSubmit={handleCreate} submitting={submitting} />
    </div>
  );
};

export default BlogPostCreate;
