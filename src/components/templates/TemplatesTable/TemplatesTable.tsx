import { FaEdit } from "react-icons/fa"
import styles from './TemplatesTable.module.sass'

interface TemplatesTableProps {
  templates: templateDataType[]
}


export const TemplatesTable = (props: TemplatesTableProps) => {
  const { templates } = props
  
  const renderRows = () => {
    return templates.map((template) => {
      return (
        <tr key={template.id}>
          <td>{template.name}</td>
          <td>{template.subject}</td>
          <td>
            <button className={styles.TemplatesTable__edit} aria-label="edit">
              <FaEdit />
            </button>
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