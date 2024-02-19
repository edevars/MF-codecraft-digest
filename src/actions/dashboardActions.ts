"use server"
import { dashboardApiCalls } from "app/services/dashboardApiCalls"

const FIFTTEEN_MINUTES = 15 * 60 * 1000

export const getDashboardInfo = async () => {
  try {
    const response = await fetch(dashboardApiCalls.info, {
      next: {
        revalidate: FIFTTEEN_MINUTES
      }
    })
    const info : dashboardResponseDataType = await response.json()
    return info
  } catch (error) {
    throw new Error("__ERROR__GET_DASHBOARD_INFO")
  }
}
