import React from "react"
import "../Header/Header.css"
import phone from "../../images/phone.svg"
import logo from "../../images/logo.svg"
import login from "../../images/login.svg"
import cart from "../../images/cart.svg"
import search from "../../images/search.svg"

function Header() {
  return (
    <div className="header">
      <div className="header__top container">
        <p className="header__top-text">
          Bozor.<span>com</span>га Хуш келибсиз. Иш вақти:{" "}
          <span className="header__top-span">Душ-Якш 9:00 - 17:00</span>
        </p>
        <div className="header__top-links">
          <img src={phone} alt="phone" />
          <p>Телефон: </p>
          <a href="tel:(+99)8300001">(+99) 830 00 01</a> -
          <a href="tel:(+99)8300002">(+99) 830 00 02</a>
        </div>
      </div>
      <div className="header__nav">
        <img src={logo} alt="logo" className="header__nav-logo" />
        <div className="header__nav-input-box">
          <input type="text" placeholder="қидириш" />
          <select name="category" id="category">
            <option value="1">Барча категориялар</option>
          </select>
          <img
            src={search}
            alt="search"
            width="50"
            height="48"
            className="search"
          />
        </div>
        <div className="header__span-box">
          <span className="header__login">
            <img src={login} alt="login" />
          </span>
          <span>
            <img src={cart} alt="cart" />
          </span>
        </div>
      </div>
      <div className="header__nav-input-box search-input">
        <input type="text" placeholder="қидириш" />
        <select name="category" id="category">
          <option value="1">Барча категориялар</option>
        </select>
        <img
          src={search}
          alt="search"
          width="50"
          height="48"
          className="search"
        />
      </div>
      <div className="select-div">
        <select className="header__select" name="category" id="category">
          <option value="1">Барча категориялар</option>
        </select>
      </div>
    </div>
  )
}

export default Header
