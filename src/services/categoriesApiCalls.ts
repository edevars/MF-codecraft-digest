import { CODECRAFT_API } from "app/config/env";

export const categoriesApiCalls = {
  categories: `${CODECRAFT_API}/api/categories/`,
  category: (id: string) => `${CODECRAFT_API}/api/categories/${id}`
}