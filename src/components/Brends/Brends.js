import React, {Component} from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../Brends/Brends.css"
import first from "../../images/brend/1.svg"
import second from "../../images/brend/2.svg"
import third from "../../images/brend/3.svg"
import sam from "../../images/brend/sam.svg"
import fifth from "../../images/brend/5.svg"
import sixth from "../../images/brend/6.svg"
import logo from "../../images/logo.svg"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

class Brends extends Component {
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
      slidesToShow: 10,
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
      <div className="brend-wrapper">
        <div className="brend">
          <h2 className="brend__title">Брендлар</h2>
          <hr />
          <p className="brend__text">Хамма Брендлар »</p>
          <div className="brend__btn-group">
            <button className="button brend__btn-prev" id="prev" onClick={this.previous}>
              <NavigateBeforeIcon />
            </button>
            <button className="button brend__btn-next" id="next" onClick={this.next}>
              <NavigateNextIcon />
            </button>
          </div>
        </div>
        <Slider ref={(c) => (this.slider = c)} className="slider" {...settings}>
          <img
            className="slider-img"
            width="80"
            height="60"
            src={first}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={second}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={third}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={sam}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={fifth}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={sixth}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={logo}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={first}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={second}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={third}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={first}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={second}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={third}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={sam}
            alt="image"
          />
          <img
            className="slider-img"
            width="80"
            height="60"
            src={fifth}
            alt="image"
          />
        </Slider>
      </div>
    )
  }
}

export default Brends
