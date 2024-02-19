"use server"
import { dashboardApiCalls } from "app/services/dashboardApiCalls"

export const getDashboardInfo = async () => {
  try {
    const response = await fetch(dashboardApiCalls.info, {
      cache: 'no-cache',
    })
    const info : dashboardResponseDataType = await response.json()
    return info
  } catch (error) {
    throw new Error("__ERROR__GET_DASHBOARD_INFO")
  }
}
