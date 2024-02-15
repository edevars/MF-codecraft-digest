"use server"

import { suscriptorApiCalls } from "app/services/suscriptorApiCalls"

type userDataType = {
  email: string | [],
  name: string
}

export const subscribeUser = async (userData: userDataType) => {
  try {
    const response = await fetch(suscriptorApiCalls.subscribre, {
      method: 'POST',
      body: JSON.stringify({
        ...userData
      }),
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
      })
    })
    const susbscriptorResponse : userDataType = await response.json()
    return susbscriptorResponse
  } catch (error) {
    throw new Error("__ERROR__SUBSCRIBE_USER")
  }
}