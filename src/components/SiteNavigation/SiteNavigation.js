import React from "react"
import "../SiteNavigation/SiteNavigation.css"


function SiteNaviagtion() {
  return (
    <div className="site-navigation">
      <div className="site-nav">
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
