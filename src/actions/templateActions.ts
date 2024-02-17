"use server"

import { templateApiCalls } from "app/services/templateApiCalls"

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
    throw new Error("__ERROR__SUBSCRIBE_USER")
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
    throw new Error("__ERROR__SUBSCRIBE_USER")
  }
}