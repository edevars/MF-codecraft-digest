"use server"

import { templateApiCalls } from "app/services/templateApiCalls"
import { revalidateTag } from "next/cache"

export const getTemplates = async () => {
  try {
    const response = await fetch(templateApiCalls.templates, {
      next: {
        tags: ["template"]
      }
    })
    const templates : templateDataType[] = await response.json()
    return templates
  } catch (error) {
    throw new Error("__ERROR__GET_TEMPLATES")
  }
}

export const getTemplateById = async (id: string) => {
  try {
    const response = await fetch(templateApiCalls.templateById(id), {
      next: {
        tags: ["template"]
      }
    })

    const template : templateDataType = await response.json()
    return template
  } catch (error) {
    throw new Error("__ERROR__GET_TEMPLATE_BY_ID")
  }
}

export const updateTemplate = async (template: templateDataType, id: number) => {
  try {
    const response = await fetch(templateApiCalls.templateById(id), {
      method: "PUT",
      body: JSON.stringify(template),
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      }),
    })
    const newTemplate : templateDataType = await response.json()
    revalidateTag("template")
    return newTemplate
  } catch (error) {
    throw new Error("__ERROR__UPDATE_TEMPLATE")
  }
}