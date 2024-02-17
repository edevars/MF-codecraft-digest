import { Aside } from "app/components/shared/Aside"
import styles from 'app/styles/AdminLayout.module.sass'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.AdminLayout}>
      <Aside />
      <div className={styles.AdminLayout__wrapper}>
        {children}
      </div>
    </main>
  )
}