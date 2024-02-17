import { getCategories } from "app/actions/categoriesActions"
import { getTemplateById } from "app/actions/templateActions"
import { TemplateForm } from "app/components/templates/TemplateForm"

interface EditTemplateProps {
  params: {
    id: string
  }
}

export default async function EditTemplate({ params }: EditTemplateProps) {

  const template = await getTemplateById(params.id)
  const categories = await getCategories()

  return (
    <section>
      <h1>Edit Template</h1>
      <TemplateForm template={template} categories={categories} />
    </section>
  )
}