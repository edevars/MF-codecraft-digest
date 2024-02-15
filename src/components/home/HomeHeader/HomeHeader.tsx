import styles from './HomeHeader.module.sass'

export const HomeHeader = () => {
  return(
    <section className={styles.HomeHeader}>
      <h1>Codecraft Digest</h1>
      <h2>
        Elevate your coding game with CodeCraft Digest! 🚀 
      </h2>
      <p>
      Stay ahead in tech with curated articles, coding tips, industry updates, and exclusive resources. Subscribe now for your daily dose of coding inspiration! 💻✨
      </p>
    </section>
  )
}