"use server"

import { newslettersApiCall } from "app/services/newslettersApiCall"

export const getNewsletters = async () => {
  try {
    const response = await fetch(newslettersApiCall.newsletters, {
      next: {
        tags: ["newsletters"]
      }
    })
    const newsletters: newsletterDataType[] = await response.json()
    return newsletters
  } catch (error) {
    throw new Error("__ERROR__GET_NEWSLETTERS")
  }
}

export const sendNewsletter = async (data: {
  newsletter_name: string,
  recipient?: string[],
  template_id: number | string,
}) => {
  try {
    const response = await fetch(newslettersApiCall.sentNewsletters, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      next: {
        tags: ["newsletters"]
      }
    })
    const emailResponse: { success: boolean, message: string, success_emails_sent: number } = await response.json()
    return emailResponse
  } catch (error) {
    console.log(error)
    throw new Error("__ERROR__SEND_NEWSLETTER")
  }
}
