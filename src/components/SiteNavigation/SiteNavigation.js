import React from "react"
import "../SiteNavigation/SiteNavigation.css"
import menu from "../../images/menu1.svg"

function SiteNaviagtion() {
  return (
    <div className="site-navigation">
      <div className="site-nav">
        <div className="site-nav__category-box">
          <h2 className="category__heading">Категориялар</h2>
          <img src={menu} alt="menu"/>
        </div>
        <ul className="site-nav__list">
          <li className="site-nav__item">
            <a href="#" className="site-nav__link">
              Бош саҳифа
            </a>
          </li>
          <li className="site-nav__item">
            <a href="#" className="site-nav__link">
              Биз ҳақимизда
            </a>
          </li>
          <li className="site-nav__item">
            <a href="#" className="site-nav__link">
              Чегирмалар
            </a>
          </li>
          <li className="site-nav__item">
            <a href="#" className="site-nav__link">
              Биз билан алока 
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SiteNaviagtion
