"use client"

import { useState } from "react";
import MDEditor from "@uiw/react-md-editor"
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

interface MarkdownEditorProps {
  template: templateDataType
}


export const MarkdownEditor = ({ template }: MarkdownEditorProps) => {
  const [name, setName] = useState(template.name)
  const [subject, setSubject] = useState(template.subject)
  const [content, setContent] = useState(template.content);
  
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const onChangeSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value)
  }
  
  return (
    <form action="">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={name} onChange={onChangeName}/>
      <label htmlFor="Subject">Subject</label>
      <input type="text" name="subject" value={subject} onChange={onChangeSubject}/>
      <div data-color-mode="light">
        <MDEditor value={content} onChange={setContent} />
      </div>
    </form>
  )
}
