// import React from 'react';
// import PropTypes from 'prop-types';
// import BlogPostItem from '../BlogPostItem/BlogPostItem';
// import styles from './BlogPostList.module.css';

// const BlogPostList = ({ posts }) => {
//   if (!posts || posts.length === 0) {
//     return (
//       <div className={styles.emptyState}>
//         <p>No blog posts available.</p>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.blogPostList}>
//       {posts.map((post) => (
//         <BlogPostItem
//           key={post.id}
//           title={post.title}
//           summary={post.summary}
//           date={post.date}
//           url={post.url}
//         />
//       ))}
//     </div>
//   );
// };

// BlogPostList.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       title: PropTypes.string.isRequired,
//       summary: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default BlogPostList; 

// /src/components/BlogPostList/BlogPostList.js


import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostList = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <Link to="/create">Create New Post</Link>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link to={`/edit/${post.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
