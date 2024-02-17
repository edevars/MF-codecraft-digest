import { getTemplates } from "app/actions/templateActions"
import { TemplatesTable } from "app/components/templates/TemplatesTable"

export default async function Template() {

  const templates = await getTemplates()

  return (
    <section>
      <h1>Templates</h1>
      <TemplatesTable templates={templates} />
    </section>
  )
}