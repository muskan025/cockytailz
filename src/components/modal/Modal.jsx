import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

const Modal = ({isModalOpen,setIsModalOpen,children}) => {
 
  function onClose(){
    setIsModalOpen(!isModalOpen)
  }

  return createPortal(
      <section className={`${styles.modal_overlay} ${isModalOpen?'':styles.hide}`} onClick={onClose}>
      <div className={`${styles.modal_content}`} onClick={(e)=>e.stopPropagation()}>
          {children}
      </div>
      </section>,
    document.getElementById('portal')
  )
}

export default Modal
