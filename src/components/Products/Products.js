import React, {Component} from "react"
import "../Products/Products.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import first from "../../images/xits/first.svg"
import second from "../../images/xits/second.svg"
import third from "../../images/xits/third.svg"
import fourth from "../../images/xits/fourth.svg"
import fifth from "../../images/xits/fifth.svg"
import plus from "../../images/xits/plus.svg"

class Products extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className="products-wrapper">
        <div className="products">
          <h2 className="products__title">Янги маҳсулотлар</h2>
          <hr />
          <p className="products__text">Хамма маҳсулотлар »</p>
          <div className="products__btn-group">
            <button className="button products__btn-prev" onClick={this.previous}>
              <NavigateBeforeIcon />
            </button>
            <button className="button products__btn-next" onClick={this.next}>
              <NavigateNextIcon />
            </button>
          </div>
        </div>
        <Slider ref={(c) => (this.slider = c)} className="slider" {...settings}>
          <a href="#" className="product__link">
            <div className="product__img-box">
              <img width="190" height="200" src={first} alt="image" />
            </div>
            <h3 className="product__title">Музлаткич LG 2050</h3>
            <hr />
            <p className="product__price">
              {" "}
              <span>2.800.000</span> 2.500.000 сўм
            </p>
            <button>
              <img src={plus} alt="plus" />
            </button>
          </a>
          <a href="#" className="product__link">
            <div className="product__img-box">
              <img width="190" height="200" src={second} alt="image" />
            </div>
            <h3 className="product__title">Кондиционер Gree 156</h3>
            <hr />
            <p className="product__price">1.595.000 сўм</p>
            <button>
              <img src={plus} alt="plus" />
            </button>
          </a>
          <a href="#" className="product__link">
            <div className="product__img-box">
              <img width="190" height="200" src={third} alt="image" />
            </div>
            <h3 className="product__title">Телевизор Samsung 54 диагональ</h3>
            <hr />
            <p className="product__price">2.500.000 сўм</p>
            <button>
              <img src={plus} alt="plus" />
            </button>
          </a>
          <a href="#" className="product__link">
            <div className="product__img-box">
              <img width="190" height="200" src={fourth} alt="image" />
            </div>
            <h3 className="product__title">Galaxy S8 Smartphone</h3>
            <hr />
            <p className="product__price">1.595.000 сўм</p>
            <button>
              <img src={plus} alt="plus" />
            </button>
          </a>
          <a href="#" className="product__link">
            <div className="product__img-box">
              <img width="190" height="200" src={fifth} alt="image" />
            </div>
            <h3 className="product__title">Кондиционер LG 854</h3>
            <hr />
            <p className="product__price">2.500.000 сўм</p>
            <button>
              <img src={plus} alt="plus" />
            </button>
          </a>
          <a href="#" className="product__link">
            <div className="product__img-box">
              <img width="190" height="200" src={third} alt="image" />
            </div>
            <h3 className="product__title">Музлаткич LG 2050</h3>
            <hr />
            <p className="product__price">
              {" "}
              <span>2.800.000</span> 2.500.000 сўм
            </p>
            <button>
              <img src={plus} alt="plus" />
            </button>
          </a>
        </Slider>
      </div>
    )
  }
}

export default Products
