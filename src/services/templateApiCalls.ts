import { CODECRAFT_API } from "app/config/env";

export const templateApiCalls = {
  templates: `${CODECRAFT_API}/api/templates/`,
  templateById: (id: string | number) => `${CODECRAFT_API}/api/templates/${id}/`,
}