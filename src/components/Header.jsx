import "./Header.module.css"

import logo from "../Images/logotype.jpg"

function Header() {
  return (
    <nav>
      <div>
        <img
          src={logo}
          alt='logo'
        />
        <a href='#about'>О нас</a>
        <a href='#partners'>Партнеры</a>
        <a href='#services'>Преимущества</a>
        <a href='#contacts'>Контакты</a>
      </div>
    </nav>
  )
}

export default Header
