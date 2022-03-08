import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css'
import geschoolLogo from '../../assets/img/geschool-logo.png'
import heroBg1 from '../../assets/img/hero-bg1.png'
import heroBg2 from '../../assets/img/hero-bg2.png'
import heroBg3 from '../../assets/img/hero-bg3.png'

import mHeroBg1 from '../../assets/img/m-hero-bg1.png'
import mHeroBg2 from '../../assets/img/m-hero-bg2.png'
import mHeroBg3 from '../../assets/img/m-hero-bg3.png'


export default function Hero() {
    const background = [ heroBg1, heroBg2, heroBg3 ]
    const mbackground = [ mHeroBg1, mHeroBg2, mHeroBg3 ]

    const carouselSettings = {
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slideToScroll: 1,
        pauseOnHover: false,
        arrows: false
    }
    return (
        <div className='hero-container'>
            <div className="hero-title-container">
                <div className="hero-logo">
                    <img src={geschoolLogo} alt="" srcset="" />
                </div>
                <div className="hero-title">
                    <h1>GESCHOOL</h1>
                    <p>It's Blended Learning</p>
                </div>
            </div>
            <div className="hero-carousel desktop">
                <Slider {...carouselSettings}>
                    {
                        background.map((item, index) => (
                            <img key={index} src={item} className="hero-slick-img" alt="" srcset="" />
                        ))
                    }
                </Slider>
            </div>
            <div className="hero-carousel mobile">
                <Slider {...carouselSettings}>
                    {
                        mbackground.map((item, index) => (
                            <img key={index} src={item} className="hero-slick-img"  alt="" srcset="" />
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}
