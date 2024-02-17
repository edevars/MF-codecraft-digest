"use server"

import { categoriesApiCalls } from "app/services/categoriesApiCalls"

export const getCategories = async () => {
  try {
    const response = await fetch(categoriesApiCalls.categories, {
      next: {
        tags: ["categories"]
      }
    })
    const categories : categoryDataType[] = await response.json()
    return categories
  } catch (error) {
    throw new Error("__ERROR__GET_CATEGORIES")
  }
}
