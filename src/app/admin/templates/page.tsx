import Link from "next/link"
import { FaPlusSquare } from "react-icons/fa"
import { getTemplates } from "app/actions/templateActions"
import { TemplatesTable } from "app/components/templates/TemplatesTable"
import styles from 'app/styles/AdminTemplates.module.sass'

export default async function Template() {

  const templates = await getTemplates()

  return (
    <section>
      <div className={styles.AdminTemplates}>
        <h1>Templates</h1>
        <Link href="/admin/templates/create" className={styles.AdminTemplates__button}>
          <FaPlusSquare />
          Create template
        </Link>
      </div>

      <TemplatesTable templates={templates} />
    </section>
  )
}