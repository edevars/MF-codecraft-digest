"use server"

import { templateApiCalls } from "app/services/templateApiCalls"

type templateDataType = {
  id: number,
  name: string,
  subject: string,
  content: string,
  category_id: number,
  category_topic: number
}

export const getTemplates = async () => {
  try {
    const response = await fetch(templateApiCalls.templates)
    const templates : templateDataType[] = await response.json()
    return templates
  } catch (error) {
    throw new Error("__ERROR__SUBSCRIBE_USER")
  }
}