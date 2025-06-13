// src/components/DeleteButton/DeleteButton.jsx
import React, { useState } from 'react';
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog';
import './DeleteButton.css';

function DeleteButton({ postId, onDelete }) {
  const [showDialog, setShowDialog] = useState(false);

  const handleDeleteClick = () => setShowDialog(true);
  const handleDialogClose = () => setShowDialog(false);
  const handleConfirmDelete = () => {
    onDelete(postId);
    setShowDialog(false);
  };

  return (
    <>
      <button className="delete-button" onClick={handleDeleteClick}>
        Delete
      </button>

      {showDialog && (
        <ConfirmationDialog
          onClose={handleDialogClose}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
}

export default DeleteButton;
