import styles from "./Footer.module.css"

import logo from "../Images/Logo.png"

function Footer() {
  return (
    <div className={styles.footer}>
      <img
        src={logo}
        alt='logo'
      />
      <p>Входит в группу «Аллео Инвест»</p>
      <div className={styles.footerNav}>
        <a href='#about'>О нас</a>
        <a href='#partners'>Партнеры</a>
        <a href='#services'>Преимущества</a>
        <a href='#contacts'>Контакты</a>
      </div>
    </div>
  )
}

export default Footer
