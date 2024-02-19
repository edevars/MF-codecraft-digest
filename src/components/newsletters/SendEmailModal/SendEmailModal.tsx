"use client"
import { SendEmailForm } from '../SendEmailForm';
import { createPortal } from 'react-dom';
import styles from './SendEmailModal.module.sass';
interface SendEmailModalProps {
  closeModal: () => void
}

export const SendEmailModal = ({ closeModal }: SendEmailModalProps) => {
  return createPortal(
    <div className={styles.SendEmailModal}>
      <button onClick={closeModal} className={styles.SendEmailModal__button}>
      </button>
      <div className={styles.SendEmailModal__content}>
        <SendEmailForm closeModal={closeModal} />
      </div>
    </div>
    ,
    document.body
  )
};