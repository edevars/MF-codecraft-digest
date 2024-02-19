import { getDashboardInfo } from "app/actions/dashboardActions"
import styles from 'app/styles/Dashboard.module.sass'


export default async function DashboardPage() {

  const info = await getDashboardInfo()

  return (
    <main>
      <h1>Dashboard</h1>
      <section className={styles.Dashboard}>
        <article>
          <p>
            <b>Subscribed</b>
            <span>
              {info.suscriptors}
            </span>
          </p>
        </article>
        <article>
          <p>
            <b>Unsubscribed</b>
            <span>
              {info.unsubscribed}
            </span>
          </p>
        </article>
        <article>
          <p>
            <b>Emails sent</b>
            <span>
              {info.total_sent}
            </span>
          </p>
        </article>
        <article>
          <p>
            <b>Most sent template</b>
            <span style={{fontSize: "2.5rem"}}>
              {info.more_sent_template}
            </span>
          </p>
        </article>
      </section>
    </main>
  )
}