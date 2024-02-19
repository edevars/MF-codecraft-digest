"use client"
import { NewsletterTable } from "app/components/newsletters/NewsletterTable";
import { Button } from "app/components/shared/Button";
import { FaEnvelope } from "react-icons/fa"
import styles from './NewsletterContainer.module.sass'

interface NewsletterContainerProps {
  newsletters: newsletterDataType[]
}

export const NewsletterContainer = ({ newsletters }: NewsletterContainerProps) => {
  return (
    <div>
      <div className={styles.NewsletterContainer__head}>
        <h1>Newsletters</h1>
        <Button onClick={() => { }}>
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