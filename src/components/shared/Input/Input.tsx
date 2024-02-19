import styles from './Input.module.sass';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
}

export const Input = ({ type, placeholder, value, onChange, name, label, disabled, required }: InputProps) => {
  return (
    <div className={styles.Input}>
      <label htmlFor={name}>{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        name={name} 
        disabled={disabled} 
        required={required}
        />
    </div>
  )
}