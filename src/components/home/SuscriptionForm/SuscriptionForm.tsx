"use client"
import { FormEvent } from 'react'
import { subscribeUser } from 'app/actions/suscriptorActions'
import styles from './SuscriptionForm.module.sass'
import { toast } from 'react-toastify';

interface SuscriptionFormProps {
  setIsSuscribed: (isSuscribed: boolean) => void
}

interface formData {
  target: {
    suscriptorName: {
      value: string
    },
    suscriptorEmail: {
      value: string
    }
  }
}

export const SuscriptionForm = ({ setIsSuscribed }: SuscriptionFormProps) => {

  const handleSubmit = async (event: FormEvent<HTMLFormElement> & formData) => {
    event.preventDefault()
    const suscriptorData = {
      name: event.target.suscriptorName.value,
      email: event.target.suscriptorEmail.value
    }

    const data = await subscribeUser(suscriptorData)

    if (data.email[0] === 'suscriptor with this email already exists.') {
      toast.error(data.email[0], {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      })
    }

    if (data.email && data.name) {
      setIsSuscribed(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.SuscriptionForm}>
      <input name='suscriptorName' type="text" placeholder='Maria' required />
      <input name='suscriptorEmail' type="email" placeholder='you@cool.com' required />
      <button type='submit'>Subscribe</button>
    </form>
  )
}