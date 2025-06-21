import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './BlogPostItem.module.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog';

const BlogPostItem = ({ id, title, summary, date, url, onDelete }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleDelete = async () => {
    setDeleting(true);
    await onDelete(id);
    setDeleting(false);
    setShowDialog(false);
  };

  return (
    <article className={styles.blogPostItem}>
      <Link to={url} className={styles.titleLink}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <Link to={`/edit/${id}`} className={styles.editButton}>Edit</Link>
        <DeleteButton onClick={() => setShowDialog(true)} disabled={deleting} />
      </div>
      <ConfirmationDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        onConfirm={handleDelete}
        loading={deleting}
      />
    </article>
  );
};

BlogPostItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BlogPostItem;