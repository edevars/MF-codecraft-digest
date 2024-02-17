import { FaEdit } from "react-icons/fa"
import styles from './TemplatesTable.module.sass'
import Link from "next/link"

interface TemplatesTableProps {
  templates: templateDataType[]
}


export const TemplatesTable = (props: TemplatesTableProps) => {
  const { templates } = props
  
  const renderRows = () => {
    return templates.map((template) => {
      const editUrl = `/admin/templates/edit/${template.id}`
      return (
        <tr key={template.id}>
          <td>{template.name}</td>
          <td>{template.subject}</td>
          <td>
            <Link href={editUrl} className={styles.TemplatesTable__edit} aria-label="edit">
              <FaEdit />
            </Link>
          </td>
        </tr>
      )
    })
  }

  return (
    <table className={styles.TemplatesTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Subject</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}