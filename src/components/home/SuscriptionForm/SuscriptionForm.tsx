"use client"
import {  FormEvent } from 'react'
import styles from './SuscriptionForm.module.sass'
import { subscribeUser } from 'app/actions/suscriptorActions'

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

export const SuscriptionForm = () => {

  const handleSubmit = async (event: FormEvent<HTMLFormElement> & formData) => {
    event.preventDefault()
    const suscriptorData = {
      name: event.target.suscriptorName.value,
      email: event.target.suscriptorEmail.value
    }

    const data = await subscribeUser(suscriptorData)

    if(data.email[0] === 'suscriptor with this email already exists.'){
      console.log("triger error")
    }
  }

  return(
    <form onSubmit={handleSubmit} className={styles.SuscriptionForm}>
      <input name='suscriptorName' type="text" placeholder='Maria'/>
      <input name='suscriptorEmail' type="email" placeholder='you@cool.com'/>
      <button type='submit'>Subscribe</button>
    </form>
  )
}