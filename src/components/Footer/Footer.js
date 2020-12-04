import React from "react"
import "../Footer/Footer.css"
import first from "../../images/footer/first.svg"
import second from "../../images/footer/second.svg"
import third from "../../images/footer/third.svg"
import twitter from "../../images/footer/1.svg"
import facebook from "../../images/footer/2.svg"
import instagram from "../../images/footer/3.svg"
import pinterest from "../../images/footer/4.svg"
import logo from "../../images/logo.svg"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <ul className="footer__address-list">
          <li className="footer__address-item">
            <a href="#" className="footer__address-link">
              <img src={first} alt="image" />
              <div className="footer__address-text-box">
                <p className="footer__address-textOne">Манзил</p>
                <p className="footer__address-textTwo">
                  Тошкент ш., Шота Р. 12
                </p>
              </div>
            </a>
          </li>
          <li className="footer__address-item">
            <a href="#" className="footer__address-link">
              <img src={second} alt="image" />
              <div className="footer__address-text-box">
                <p className="footer__address-textOne">Email</p>
                <p className="footer__address-textTwo">info@bozor.com</p>
              </div>
            </a>
          </li>
          <li className="footer__address-item">
            <a href="tel:(+99)8300001" className="footer__address-link">
              <img src={third} alt="image" />
              <div className="footer__address-text-box">
                <p className="footer__address-textOne">Телефон</p>
                <p className="footer__address-textTwo">
                  (+99) 830 00 01 - (+99) 830 00 02
                </p>
              </div>
            </a>
          </li>
        </ul>
        <div className="footer__social-media">
          <p className="footer__social-media-text">Бизни кузатиб боринг</p>
          <a href="#" className="footer__social-media-link">
            <img src={twitter} alt="link" />
          </a>
          <a href="#" className="footer__social-media-link">
            <img src={facebook} alt="link" />
          </a>
          <a href="#" className="footer__social-media-link">
            <img src={instagram} alt="link" />
          </a>
          <a href="#" className="footer__social-media-link">
            <img src={pinterest} alt="link" />
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <img src={logo} alt="logo" />
        <p className="footer__bottom-text">
          © 2019 Bozor.com. Барча ҳуқуқлар ҳимояланган.
        </p>
      </div>
    </div>
  )
}

export default Footer
