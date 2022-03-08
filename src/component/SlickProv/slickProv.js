import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './SlickProv.css'

import logoYogyakarta from '../../assets/img/logo/yogyakarta.png'
import logoBanten from '../../assets/img/logo/banten.png'
import logoSumbar from '../../assets/img/logo/sumbar.png'
import logoMadrasahDiy from '../../assets/img/logo/madrasah-diy.png'
import logoMuhammadiyah from '../../assets/img/logo/muhammadiyah.png'
import logoMadrasahSumbar from '../../assets/img/logo/madrasah.png'
import logoKalimatanTimur from '../../assets/img/logo/kalimantan-timur.png'


import bgYogyakarta from '../../assets/img/main-bg/yogyakarta.png'
import bgBanten from '../../assets/img/main-bg/banten.png'
import bgSumbar from '../../assets/img/main-bg/sumbar.png'
import bgMadrasahDiy from '../../assets/img/main-bg/madrasah-diy.png'
import bgMuhammadiyah from '../../assets/img/main-bg/muhammadiyah.png'
import bgMadrasahSumbar from '../../assets/img/main-bg/madrasah-sumbar.png'
import bgKalimantanTimur from '../../assets/img/web-bg/kalimantan-timur.jpg'


import { Link } from 'react-router-dom';

export default function SlickProv() {

    const [main, setMain] = useState([])

    const carouselSettings = {
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
        infinite: true,
        slideToScroll: 1,
        // pauseOnHover: false,
    }

    const summary = {
        items : [
            {
                'name': 'Geschool Yogyakarta',
                'desc': 'DIY Blended Learning',
                'region': 'Yogyakarta',
                'logo': `${logoYogyakarta}`,
                'bg': `${bgYogyakarta}`
            },
            {
                'name': 'Geschool Banten',
                'desc': 'Banten Blended Learning',
                'region': 'Banten',
                'logo': `${logoBanten}`,
                'bg': `${bgBanten}`
            },
            {
                'name': 'Geschool Sumbar',
                'desc': 'Sumatera Barat Blended Learning',
                'region': 'Sumbar',
                'logo': `${logoSumbar}`,
                'bg': `${bgSumbar}`
            },
            {
                'name': 'Madrasah DIY',
                'desc': 'Madrasah DIY Blended Learning',
                'region': 'Madrasah-DIY',
                'logo': `${logoMadrasahDiy}`,
                'bg': `${bgMadrasahDiy}`
            },
            {
                'name': 'Muhammadiyah',
                'desc': 'Muhammadiyah Blended Learning',
                'region': 'Muhammadiyah',
                'logo': `${logoMuhammadiyah}`,
                'bg': `${bgMuhammadiyah}`
            },
            {
                'name': 'Madrasah Sumbar',
                'desc': 'Madrasah Sumbar Blended Learning',
                'region': 'Madrasah-Sumbar',
                'logo': `${logoMadrasahSumbar}`,
                'bg': `${bgMadrasahSumbar}`
            },
            {
                'name': 'Kalimantan Timur',
                'desc': 'Kalimantan Timur Blended Learning',
                'region': 'Yogyakarta',
                'logo': `${logoKalimatanTimur}`,
                'bg': `${bgKalimantanTimur}`
            }
        ]
    }


    useEffect(() => {
        setMain(summary.items)
    }, [])

    return (
        <Slider {...carouselSettings} style={{ width: '100%' }}>
            {
                main.map((item, index) => (
                    <div className='col-12'>
                        <Link key={index} to="/page/prov" className="col-12 main-item-img bottom-slick-item" style={{backgroundImage: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                            <h2>{item.name}</h2>
                            <img src={item.logo} className={item.region !== 'Yogyakarta' ? 'item-logo-slick-prov' : 'item-logo-slick-prov-s' } alt={item.region} srcSet="" />
                            <p>{item.desc}</p>
                            <div className="overlay"></div>
                        </Link>
                    </div>
                ))
            }
        </Slider>
        
    )
}
