import { getTemplateById } from "app/actions/templateActions"

interface EditTemplateProps {
  params: {
    id: string
  }
}

export default async function EditTemplate({ params }: EditTemplateProps) {

  const template = await getTemplateById(params.id)

  return (
    <section>
      <h1>Edit Template</h1>
      <form>
        <input value={template.name} type="text" placeholder="Name" />
        <input value={template.subject} type="text" placeholder="Subject" />
        <textarea value={template.content} />
        <button type="submit">Save</button>
      </form>
    </section>
  )
}