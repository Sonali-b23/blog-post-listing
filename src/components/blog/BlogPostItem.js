import React from 'react';
import './BlogPostItem.css';  // Import the CSS for styling

const BlogPostItem = ({ title, summary, date }) => {
  return (
    <div className="blog-post-item">
      <h2>{title}</h2>
      <p>{summary}</p>
      <p className="date">{date}</p>
    </div>
  );
};

export default BlogPostItem;
