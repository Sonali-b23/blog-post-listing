import React from 'react';
import BlogPostItem from './BlogPostItem'; // Import BlogPostItem component
import './BlogPostList.css';  // Import the CSS for styling

const BlogPostList = ({ posts }) => {
  return (
    <div className="blog-post-list">
      {posts.map((post, index) => (
        <BlogPostItem
          key={index}
          title={post.title}
          summary={post.summary}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default BlogPostList;
