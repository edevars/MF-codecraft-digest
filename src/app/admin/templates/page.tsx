import { getTemplates } from "app/actions/templateActions"

export default async function Template() {

  const templates = await getTemplates()

  return (
    <section>
      <h1>Templates</h1>
      {templates.map((template) => {
        return <p key={template.id}>
          {template.name}
        </p>
      })}
    </section>
  )
}