import React from 'react'
import "../About/About.css"
import first from "../../images/about/first.svg"
import second from "../../images/about/second.svg"
import third from "../../images/about/third.svg"
import fourth from "../../images/about/fourth.svg"

function About() {
  return (
    <div className="about">
      <ul className="about__list">
        <li className="about__item">
          <img src={first} alt="image" className="about__img"/>
          <h4 className="about__heading">Дунё бўйлаб етказиб бериш </h4>
          <p className="about__text">Биз 200 дан ортиқ давлатларга  буйуртмаларни етказиб берамиз.</p>
        </li>
        <li className="about__item">
          <img src={third} alt="image" className="about__img"/>
          <h4 className="about__heading">Хавфсиз тўлов </h4>
          <p className="about__text">Дунёнинг энг машҳур ва қулай  тўлов тизимларида тўланг.</p>
        </li>
        <li className="about__item">
          <img src={second} alt="image" className="about__img"/>
          <h4 className="about__heading">Ишонч билан сотиб олинг </h4>
          <p className="about__text">Бизнинг махсулотлар  сифат ёрлиқига эга.</p>
        </li>
        <li className="about__item">
          <img src={fourth} alt="image" className="about__img"/>
          <h4 className="about__heading">24/7 хизмат кўрсатиш маркази</h4>
          <p className="about__text">Туни-кун сизнинг хизматингизда.</p>
        </li>
      </ul>
    </div>
  )
}

export default About 
