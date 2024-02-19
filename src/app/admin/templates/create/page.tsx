import { getCategories } from "app/actions/categoriesActions"
import { TemplateForm } from "app/components/templates/TemplateForm"

export const dynamic = "force-dynamic"

export default async function CreateTemplate() {

  const categories = await getCategories()
  const template: templateDataType = {
    id: 1,
    name: "",
    subject: "",
    content: "",
    category_id: categories[0].id,
    category_topic: categories[0].topic,
    attached_file: null,
  } 

  return (
    <section>
      <h1>Create Template</h1>
      <TemplateForm template={template} categories={categories} type="create"/>
    </section>
  )
}