import React from "react"
import "../../components/Sidebar/Sidebar.css"
import StayCurrentPortraitIcon from "@material-ui/icons/StayCurrentPortrait"
import GroupWorkIcon from "@material-ui/icons/GroupWork"
import EcoIcon from "@material-ui/icons/Eco"
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball"
import tags from "../../images/tags.svg"
import camera from "../../images/camera.svg"
import plug from "../../images/plug.svg"
import music from "../../images/music.svg"
import apple from "../../images/apple.svg"
import logo from "../../images/logo.svg"
import menu from "../../images/menu1.svg"

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
          <div className="site-nav__category-box">
            <h2 className="category__heading">Категориялар</h2>
            <img src={menu} alt="menu" />
          </div>
        <div className="category">
          <div className="category-box">
            <h2 className="category__heading">Категориялар</h2>
            <img src={menu} alt="menu" />
          </div>
        </div>
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <StayCurrentPortraitIcon className="sidebar__icon" />
              <p className="sidebar__text">Маиший техника воситалари</p>
              <div className="subcategory__container">
                <div className="subcategory">
                  <div className="subcategory-groups">
                    <p className="subcategory__title">Sabzavot va mevalar</p>
                    <ul className="subcategory__list">
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Hammasi
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Sabzavotlar
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Meva
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Ko'katlar
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Quritilgan mevalar/Yong'oqla
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="subcategory-groups">
                    <p className="subcategory__title">
                      Go'sht va go'sht mahsulotlari
                    </p>
                    <ul className="subcategory__list">
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Hammasi
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Mol go'shti
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Qo'y go'shti
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Parranda go'shti
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link link-more">
                          Хаммасини корсатиш »
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="subcategory-groups">
                    <p className="subcategory__title">Yuvish vositalari</p>
                    <ul className="subcategory__list">
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Hammasi
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Kir yuvish kukunlari
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Kiyimni parvarish qilish uchun vositalar
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Tozalovchi va yuvish vositalari
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link link-more">
                          Хаммасини корсатиш »
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="subcategory-groups">
                    <p className="subcategory__title">
                      Tuxum / Sut va sut mahsulotlari
                    </p>
                    <ul className="subcategory__list">
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Hammasi{" "}
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Sut/Sut kokteyllari
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Qatiq/Ryajenka/Ayron
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Yogurt
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Qaymoq/Slivki
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link link-more">
                          Хаммасини корсатиш »
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="subcategory-groups">
                    <p className="subcategory__title">
                      Tuxum / Sut va sut mahsulotlari
                    </p>
                    <ul className="subcategory__list">
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Hammasi{" "}
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Sut/Sut kokteyllari
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Qatiq/Ryajenka/Ayron
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Yogurt
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link">
                          Qaymoq/Slivki
                        </a>
                      </li>
                      <li className="subcategory__item">
                        <a href="#" className="subcategory__link link-more">
                          Хаммасини корсатиш »
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="subcategory__img-box">
                    <img
                      src={logo}
                      width="275"
                      alt="image"
                      className="subcategory__img"
                    />
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <GroupWorkIcon className="sidebar__icon" />
              <p className="sidebar__text">Телефон, гаджет, аксессуарлар</p>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <EcoIcon className="sidebar__icon" />
              <p className="sidebar__text">Маиший техника</p>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <img src={tags} alt="tags" className="sidebar__icon" />
              <p className="sidebar__text">Ошхона техникаси</p>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <SportsBasketballIcon className="sidebar__icon" />
              <p className="sidebar__text">Спорт анжомлари</p>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <img src={camera} alt="camera" className="sidebar__icon" />
              <p className="sidebar__text">Гўзаллик ва саломатлик</p>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <img src={plug} alt="plug" className="sidebar__icon" />
              <p className="sidebar__text">Авто жиҳозлар</p>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <img src={music} alt="music" className="sidebar__icon" />
              <p className="sidebar__text">Барчаси офис, уй ва боғ учун</p>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <img src={apple} alt="apple" className="sidebar__icon" />
              <p className="sidebar__text">
                Болалар учун ўйинчоқ ва маҳсулотлар
              </p>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
export default Sidebar
