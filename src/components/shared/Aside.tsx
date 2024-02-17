import Link from 'next/link'
import styles from './Aside.module.sass'

import { FaEnvelope, FaChartPie, FaCode, FaList } from 'react-icons/fa';

export const Aside = () => {
  return (
    <aside className={styles.Aside}>
      <h2>Codecraft Digest</h2>
      <ul>
        <li>
          <FaEnvelope />
          <Link href="/admin/newsletters">Newsletters</Link>
        </li>
        <li>
          <FaCode />
          <Link href="/admin/templates">Templates</Link>
        </li>
        <li>
          <FaList />
          <Link href="/admin/categories">Categories</Link>
        </li>
        <li>
          <FaChartPie />
          <Link href="/admin/dashboard">Dashboard</Link>
        </li>
      </ul>
    </aside>
  )
}