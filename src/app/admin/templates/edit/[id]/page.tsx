import { getTemplateById } from "app/actions/templateActions"
import { TemplateForm } from "app/components/templates/TemplateForm"

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
      <TemplateForm template={template} />
    </section>
  )
}