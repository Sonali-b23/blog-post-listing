// // src/components/ConfirmationDialog/ConfirmationDialog.jsx
// import React from 'react';
// import './ConfirmationDialog.css';

// function ConfirmationDialog({ onClose, onConfirm }) {
//   return (
//     <div className="dialog-overlay" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
//       <div className="dialog-content">
//         <h3 id="dialog-title">Confirm Deletion</h3>
//         <p>Are you sure you want to delete this blog post?</p>
//         <div className="dialog-actions">
//           <button onClick={onClose} className="cancel-button">Cancel</button>
//           <button onClick={onConfirm} className="confirm-button">Delete</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ConfirmationDialog;


import React, { useEffect, useRef } from 'react';
import './ConfirmationDialog.css';

function ConfirmationDialog({ onClose, onConfirm }) {
  const dialogRef = useRef(null);

  // Focus and Escape key handling
  useEffect(() => {
    dialogRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="dialog-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      onClick={onClose}
    >
      <div
        className="dialog-content"
        onClick={(e) => e.stopPropagation()}
        ref={dialogRef}
        tabIndex={-1}
      >
        <h3 id="dialog-title">Confirm Deletion</h3>
        <p>Are you sure you want to delete this blog post?</p>
        <div className="dialog-actions">
          <button onClick={onClose} className="cancel-button">Cancel</button>
          <button onClick={onConfirm} className="confirm-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationDialog;
