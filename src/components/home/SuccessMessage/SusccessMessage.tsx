"use client"
import { useEffect } from "react"
import JSConfetti from 'js-confetti'
import styles from './SuccessMessage.module.sass'

export const SuccessMessage = () => {
  useEffect(() => {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
      confettiRadius: 4,
      confettiNumber: 500,
    })
  }, [])

  return(
    <p className={styles.SuccessMessage}>You are now suscribed to Codecraft Digest, enjoy! ✨</p>
  )
}