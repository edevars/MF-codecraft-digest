"use client"
import { useState } from "react";
import { Input } from "app/components/shared/Input";
import { FaSave } from "react-icons/fa";
import MDEditor from "@uiw/react-md-editor"
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import styles from './TemplateForm.module.sass'

interface TemplateFormProps {
  template: templateDataType
}


export const TemplateForm = ({ template }: TemplateFormProps) => {
  const [name, setName] = useState(template.name)
  const [subject, setSubject] = useState(template.subject)
  const [content, setContent] = useState(template.content);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const onChangeSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value)
  }

  const onChangeContent = (value: string | undefined) => {
    setContent(value || '');
  }

  return (
    <form action="">
      <Input type="text" placeholder="Template name" value={name} onChange={onChangeName} name="name" label="Name" />
      <Input type="text" placeholder="Your subject" value={subject} onChange={onChangeSubject} name="subject" label="Subject" />
      <h3>Body content</h3>
      <div data-color-mode="light">
        <MDEditor value={content} onChange={onChangeContent} height={400} />
      </div>
      <div className={styles.TemplateForm__saveButtonWrapper}>
        <button>
          <FaSave /> Save
        </button>
      </div>
    </form>
  )
}