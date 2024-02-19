import { NEXT_PUBLIC_BACKEND_HOST } from "app/config/env";
import { ChangeEvent } from "react";
import { FaFileUpload } from "react-icons/fa";
import styles from './FileSelector.module.sass'

interface FileSelectorProps {
  file: File | null,
  attached_file: string | null,
  setFile: (file: File | null) => void
}

export const FileSelector = ({ file, attached_file, setFile }: FileSelectorProps) => {
  const currentAttachedFile = attached_file ? `${NEXT_PUBLIC_BACKEND_HOST}${attached_file}` : null
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className={styles.FileSelector}>
      <label htmlFor="file">
        <FaFileUpload />
        <span>Attach a file</span>
      </label>
      <input type="file" name="file" id="file" onChange={handleFileChange} accept="image/*,application/pdf"/>
      {file && <p>Attached file: {file.name}</p>}
      {currentAttachedFile && <a href={currentAttachedFile} target="_blank">See previous attached file</a>}
    </div>
  )
}