"use client"
import styles from './SendEmailModal.module.sass';
import { createPortal } from 'react-dom';

interface SendEmailModalProps {
  closeModal: () => void
}

export const SendEmailModal = ({ closeModal }: SendEmailModalProps) => {
  return createPortal(
    <button className={styles.SendEmailModal} onClick={closeModal}>
      <span>Modal</span>
    </button>,
    document.body
  )
};