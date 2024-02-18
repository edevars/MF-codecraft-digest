"use client"

import { useState } from "react";
import { Input } from "app/components/shared/Input";
import { FaSave } from "react-icons/fa";
import { Dropdown } from "app/components/shared/Dropdown";
import MDEditor from "@uiw/react-md-editor"
import { ToastContainer, toast } from 'react-toastify';
import { updateTemplate } from "app/actions/templateActions";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import styles from './TemplateForm.module.sass'

interface TemplateFormProps {
  template: templateDataType,
  categories: categoryDataType[]
}


export const TemplateForm = ({ template, categories }: TemplateFormProps) => {
  const [name, setName] = useState(template.name)
  const [subject, setSubject] = useState(template.subject)
  const [content, setContent] = useState(template.content);
  const dropdownOptions: optionType[] = categories.map((category) => ({ id: category.id, value: category.topic }))
  const categoryById = dropdownOptions.find((option) => option.id === template.category_id) || dropdownOptions[0]
  const [selectedCategory, setSelectedCategory] = useState<optionType>(categoryById)

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const onChangeSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value)
  }

  const onChangeContent = (value: string | undefined) => {
    setContent(value || '');
  }

  const saveTemplate = async () => {
    try {
      const newTemplate: templateDataType = {
        ...template,
        name,
        subject,
        content,
        category_id: selectedCategory.id as number
      }
      const responseTemplate = await updateTemplate(newTemplate, newTemplate.id)
      toast.success('Template saved successfully!', {
        theme: "colored"
      })
    } catch (error) {
      toast.error('Error saving template', {
        theme: "colored"
      })
    }
  }

  return (
    <>
      <form action={saveTemplate}>
        <Input type="text" placeholder="Template name" value={name} onChange={onChangeName} name="name" label="Name" />
        <Input type="text" placeholder="Your subject" value={subject} onChange={onChangeSubject} name="subject" label="Subject" />
        <Dropdown options={dropdownOptions} selected={selectedCategory} onSelect={setSelectedCategory} label="Category" />
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
      <ToastContainer />
    </>
  )
}
