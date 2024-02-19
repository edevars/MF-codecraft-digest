import styles from 'app/styles/Unsuscribe.module.sass'
import { FaEnvelope } from 'react-icons/fa'

export default function Page() {
  return (
    <div className={styles.Unsuscribe}>
      <FaEnvelope />
      <h1>We&apos;re sorry to see you go!</h1>
      <p>Now you are unsubscribed from <b>Codecraft Digest</b></p>
    </div>
  )
}