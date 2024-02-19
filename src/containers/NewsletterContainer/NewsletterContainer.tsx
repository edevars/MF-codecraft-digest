"use client"
import { NewsletterTable } from "app/components/newsletters/NewsletterTable";
import { Button } from "app/components/shared/Button";
import { FaEnvelope } from "react-icons/fa"
import styles from './NewsletterContainer.module.sass'
import { SendEmailModal } from "app/components/newsletters/SendEmailModal/SendEmailModal";
import { useState } from "react";

interface NewsletterContainerProps {
  newsletters: newsletterDataType[]
}

export const NewsletterContainer = ({ newsletters }: NewsletterContainerProps) => {
  const [showModal, setShowModal] = useState(false)
  
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <div>
      {showModal && <SendEmailModal closeModal={closeModal} />}
      <div className={styles.NewsletterContainer__head}>
        <h1>Newsletters</h1>
        <Button onClick={openModal}>
          <FaEnvelope />
          Sent new email
        </Button>
      </div>
      <section>
        <h3>Newsletters sent</h3>
        <NewsletterTable newsletters={newsletters} />
      </section>
    </div>
  );
}