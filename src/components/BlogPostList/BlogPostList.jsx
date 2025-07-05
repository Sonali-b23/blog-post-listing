import React from 'react';
import PropTypes from 'prop-types';
import BlogPostItem from '../BlogPostItem/BlogPostItem';
import styles from './BlogPostList.module.css';

const BlogPostList = ({ posts, onDelete, comments, onAddComment, searchQuery }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className={styles.emptyState} aria-live="polite">
        <p>No blog posts available{searchQuery ? ' for this search.' : '.'}</p>
      </div>
    );
  }

  return (
    <div className={styles.blogPostList}>
      {posts.map((post) => (
        <BlogPostItem
          key={post.id}
          id={post.id}
          title={post.title}
          summary={post.summary}
          date={post.date}
          url={post.url}
          onDelete={onDelete}
          comments={comments[post.id] || []}
          onAddComment={(comment) => onAddComment(post.id, comment)}
        />
      ))}
    </div>
  );
};

BlogPostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  comments: PropTypes.object,
  onAddComment: PropTypes.func,
};

export default BlogPostList;