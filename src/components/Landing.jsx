import styles from "./Landing.module.css"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"

import logo1 from "../Images/part1.jpg"
import logo2 from "../Images/part2.jpg"
import logo3 from "../Images/part3.jpg"
import logo4 from "../Images/part4.jpg"
import train from "../Images/train.jpeg"
import photo1 from "../Images/photo1.jpeg"
import photo2 from "../Images/photo2.jpeg"
import photo3 from "../Images/photo3.jpeg"
import photo4 from "../Images/photo4.jpeg"
import icon1 from "../Images/icon1.png"
import icon2 from "../Images/icon2.png"
import icon3 from "../Images/icon3.png"

function Landing() {
  return (
    <>
      <div
        className={styles.about}
        id='about'
      >
        <h1>О нас</h1>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              ООО «Оптима Рэйл Транс» транспортно-экспедиторская компания,
              созданная в 2020 году. Основной сферой деятельности является
              предоставление услуг транспортного экспедирования железнодорожных
              перевозок грузов, следующих транзитом через Казахстан, в том числе
              оплата жд тарифа, содействие в согласовании перевозок, быстрое
              реагирование и принятие мер в случае возникновения нештатных
              ситуаций в пути следования (отцепленные по неисправности и другим
              причинам вагоны, форс-мажорные обстоятельства и т.д.) Также имеем
              возможности по экспедированию грузов по коридору «Север-Юг»
              назначением на Иран, Турцию, Афганистан, с выходом к Персидскому
              заливу и далее - с организацией перегруза грузов с широкой на
              узкую колею без перестановки колесных пар.
            </p>
            <div className={styles.aboutGallery}>
              <img src={photo1} />
              <img src={photo2} />
              <img src={photo3} />
              <img src={photo4} />
            </div>
          </div>
          <img
            src={train}
            className={styles.mainPhoto}
          />
        </div>
      </div>
      <div
        className={styles.partners}
        id='partners'
      >
        <h1>Партнеры</h1>
        <div>
          <img src={logo1} />
          <img src={logo2} />
          <img src={logo3} />
          <img src={logo4} />
        </div>
      </div>
      <div
        className={styles.services}
        id='services'
      >
        <h1>Преимущества</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={icon1} />
            <p>
              Быстрое реагирование и принятие мер в случае возникновения
              нештатных ситуаций
            </p>
          </div>
          <div className={styles.card}>
            <img src={icon2} />
            <p>
              Содействие в согласовании перевозок. Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit
            </p>
          </div>
          <div className={styles.card}>
            <img src={icon3} />
            <p>
              Оплата жд тарифа. Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum
            </p>
          </div>
        </div>
      </div>
      <div
        className={styles.contacts}
        id='contacts'
      >
        <h1>Контакты</h1>
        <p>
          <b>Юридический адрес:</b> 117041, г. Москва, вн. тер. г. поселение
          Сосенское, п. Коммунарка, ул. Потаповская Роща, д. 6, к. 1,
          помещ./офис 8/5, ком. 2
        </p>
        <p>
          <b>Почтовый адрес:</b> 111024, г.Москва, ул. 2-я Кабельная, д.2, стр.2
        </p>
        <p>
          <b>Телефоны:</b> гор. +7 495 783 49 22<br></br> +7 495 178 08 87
        </p>
        <p>
          <b>E-mail:</b> info@optimrt.com
        </p>
      </div>
    </>
  )
}

export default Landing
