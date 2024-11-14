import { createPortal } from 'react-dom';
import '../styles/Modal.css';

export const Modal = ({children}) => {
  return createPortal(
    <div className="modalBackground">
      {children} 
    </div>,
    document.getElementById('modal')
  )
}
