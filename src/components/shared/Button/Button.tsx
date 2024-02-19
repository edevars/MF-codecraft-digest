// Write a generic button component that can be used in multiple places in the application. The button should accept a label and a click handler as props. The button should be styled to match the design of the application.

import { ReactNode } from 'react';
import styles from './Button.module.sass'

interface ButtonProps {
  children: ReactNode,
  onClick: () => void
  disabled?: boolean
}

export const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      className={styles.Button}>
        {children}
      </button>
  )
}