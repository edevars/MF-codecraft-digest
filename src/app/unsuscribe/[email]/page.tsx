import { FaEnvelope } from 'react-icons/fa'
import { unsubscribeUser } from 'app/actions/suscriptorActions'
import styles from 'app/styles/Unsuscribe.module.sass'

interface UnsubscribePageProps {
  params: {
    email: string
  }
}

export default async function UnsubscribePage({ params: { email } }: UnsubscribePageProps) {
  const formatedEmail = email.replace(/%40/g, '@')
  await unsubscribeUser(formatedEmail)

  return (
    <div className={styles.Unsuscribe}>
      <FaEnvelope />
      <h1>We&apos;re sorry to see you go!</h1>
      <p>Now you are unsubscribed from <b>Codecraft Digest</b></p>
    </div>
  )
}