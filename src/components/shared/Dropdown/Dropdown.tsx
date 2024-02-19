"use client"
import { SyntheticEvent, useState } from "react";
import styles from './Dropdown.module.sass'

interface DropdownProps {
  options: optionType[];
  selected: optionType;
  onSelect: (option: optionType) => void;
  label: string;
  disabled?: boolean;
}

export const Dropdown = ({ options, selected, onSelect, label, disabled }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selected);

  const handleOpen = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: optionType) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };
  
  return (
    <div role="listbox" className={styles.Dropdown} >
      <h3 className={styles.Dropdown__label}>{label}</h3>
      <button className={styles.Dropdown__button} onClick={handleOpen} disabled={disabled}>{selectedOption?.value}</button>
      {isOpen && (
        <ul className={styles.Dropdown__list}>
          {options.map((option) => (
            <li 
              key={option.id}
              className={styles.Dropdown__list__item} 
              onClick={() => handleSelect(option)}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};