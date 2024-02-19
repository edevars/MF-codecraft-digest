import styles from './NewsletterTable.module.sass'


interface NewsletterTableProps {
  newsletters: newsletterDataType[]
}


export const NewsletterTable = (props: NewsletterTableProps) => {
  const { newsletters } = props
  
  const renderRows = () => {
    return newsletters.map((newsletter) => {
      const formattedDate = new Date(newsletter.date_sent).toLocaleDateString()
      return (
        <tr key={newsletter.id}>
          <td>{newsletter.name}</td>
          <td>{newsletter.template_name}</td>
          <td>{newsletter.template_topic}</td>
          <td>{formattedDate}</td>
          <td>{newsletter.count_sent}</td>
        </tr>
      )
    })
  }

  return (
    <table className={styles.NewsletterTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Template</th>
          <th>Category</th>
          <th>Date sent</th>
          <th>Emails sent</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}