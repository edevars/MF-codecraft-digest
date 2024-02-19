"use server"

import { newslettersApiCall } from "app/services/newslettersApiCall"

export const getNewsletters = async () => {
  try {
    const response = await fetch(newslettersApiCall.newsletters, {
      next: {
        tags: ["newsletters"]
      }
    })
    const newsletters : newsletterDataType[] = await response.json()
    return newsletters
  } catch (error) {
    throw new Error("__ERROR__GET_NEWSLETTERS")
  }
}
