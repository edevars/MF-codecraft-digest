import { getTemplateById } from "app/actions/templateActions"
import { MarkdownEditor } from "app/components/templates/MarkdownEditor/MarkdownEditor"

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
      <MarkdownEditor template={template} />
    </section>
  )
}