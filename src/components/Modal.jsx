
import { createPortal } from 'react-dom';

function Modal ({ children, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="btn" onClick={onClose}>✖️</button>
        {children}
      </div>
    </div>
  )
}

export default function modalPortal ({ children, onClose }) {
  return createPortal(
    <Modal Modal onClose={onClose}>
      {children}
    </Modal>,
    document.getElementById('modal-root')
  );
}