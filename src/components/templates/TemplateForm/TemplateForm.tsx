"use client"

import { FormEvent, useState } from "react";
import { Input } from "app/components/shared/Input";
import { FaSave } from "react-icons/fa";
import { Dropdown } from "app/components/shared/Dropdown";
import { FileSelector } from "../FileSelector";
import MDEditor from "@uiw/react-md-editor"
import { ToastContainer, toast } from 'react-toastify';
import { updateTemplate, createTemplate } from "app/actions/templateActions";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import styles from './TemplateForm.module.sass'

interface TemplateFormProps {
  template: templateDataType,
  categories: categoryDataType[],
  type: 'create' | 'update'
}


export const TemplateForm = ({ template, categories, type }: TemplateFormProps) => {
  const [name, setName] = useState(template.name)
  const [subject, setSubject] = useState(template.subject)
  const [content, setContent] = useState(template.content);
  const [file, setFile] = useState<File | null>(null)
  const dropdownOptions: optionType[] = categories.map((category) => ({ id: category.id, value: category.topic }))
  const categoryById = dropdownOptions.find((option) => option.id === template.category_id) || dropdownOptions[0]
  const [selectedCategory, setSelectedCategory] = useState<optionType>(categoryById)
  const [processingAction, setProcessingAction] = useState(false)

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const onChangeSubject = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value)
  }

  const onChangeContent = (value: string | undefined) => {
    setContent(value || '');
  }


  const saveTemplate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('subject', subject)
      formData.append('content', content)
      formData.append('category_id', selectedCategory.id.toString())
      if (file) {
        formData.append('attached_file', file)
      }

      setProcessingAction(true)

      if (type === 'create') {
        await createTemplate(formData)
        toast.success('Template created successfully!', {
          theme: "colored"
        })
      }

      if (type === 'update') {
        await updateTemplate(formData, template.id)

        toast.success('Template saved successfully!', {
          theme: "colored"
        })
      }

    } catch (error) {
      toast.error('Error saving template', {
        theme: "colored"
      })
    } finally {
      setProcessingAction(false)
    }
  }

  return (
    <>
      <form onSubmit={saveTemplate}>
        <Input type="text" placeholder="Template name" value={name} onChange={onChangeName} name="name" label="Name" />
        <Input type="text" placeholder="Your subject" value={subject} onChange={onChangeSubject} name="subject" label="Subject" />
        <Dropdown options={dropdownOptions} selected={selectedCategory} onSelect={setSelectedCategory} label="Category" />
        <FileSelector file={file} setFile={setFile} attached_file={template.attached_file} />
        <h3>Body content</h3>
        <p>You cand add <code className={styles.TemplateForm__code}>{'{{name}}'}</code> to your template to add the name of your suscriptor.</p>
        <p className={styles.TemplateForm__disclaimer}>
          ⚠️ IMPORTANT: To show the name in the newsletter the suscriptor should be regeristered in the platform using the landing page.
        </p>
        <div data-color-mode="light">
          <MDEditor value={content} onChange={onChangeContent} height={400} />
        </div>
        <div className={styles.TemplateForm__saveButtonWrapper}>
          <button disabled={processingAction}>
            <FaSave /> Save
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  )
}
