import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './SlickKab.css'

import logoPadang from '../../assets/img/logo/padang.png'
import logoYogya from '../../assets/img/logo/yogya-kota.png'
import logoGunungKidul from '../../assets/img/logo/gunungkidul.png'
import logoSleman from '../../assets/img/logo/sleman.png'
import logoTangsel from '../../assets/img/logo/tangsel.png'
import logoBulukumba from '../../assets/img/logo/bulukumba.png'


import bgPadang from '../../assets/img/main-bg/padang.png'
import bgYogya from '../../assets/img/main-bg/yogya-kota.png'
import bgGunungKidul from '../../assets/img/main-bg/gunungkidul.png'
import bgSleman from '../../assets/img/main-bg/sleman.png'
import bgTangsel from '../../assets/img/main-bg/tangsel.png'
import bgBulukumba from '../../assets/img/main-bg/bulukumba.jpg'


import { Link } from 'react-router-dom';

export default function SlickKab1() {

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
        items: [
            {
                'name': 'Geschool Padang',
                'desc': 'Padang Kota Tercinta Blended Learning',
                'region': 'Padang',
                'logo': `${logoPadang}`,
                'bg': `${bgPadang}`
            },
            {
                'name': 'Geschool Yogyakarta',
                'desc': 'Yogyakarta Berhati Nyaman Learning',
                'region': 'yogya',
                'logo': `${logoYogya}`,
                'bg': `${bgYogya}`
            },
            {
                'name': 'Geschool Gunung Kidul',
                'desc': 'Gunungkidul Handayani Blended Learning',
                'region': 'Gunungkidul',
                'logo': `${logoGunungKidul}`,
                'bg': `${bgGunungKidul}`
            },
            {
                'name': 'Geschool Sleman',
                'desc': 'Sleman Sembada Blended Learning',
                'region': 'Sleman',
                'logo': `${logoSleman}`,
                'bg': `${bgSleman}`
            },
            {
                'name': 'Geschool Tangsel',
                'desc': 'Tangerang Selatan Blended Learning',
                'region': 'Tangerang',
                'logo': `${logoTangsel}`,
                'bg': `${bgTangsel}`
            },
            {
                'name': 'Geschool Bulukumba',
                'desc': 'Bulukumba Blended Learning',
                'region': 'Bulukumba',
                'logo': `${logoBulukumba}`,
                'bg': `${bgBulukumba}`
            }
        ]
    }

    useEffect(() => {
        setMain(summary.items)
    }, [])

    return (
        <Slider {...carouselSettings} style={{ width: '50%' }}>
                {
                    main.map((item, index) => (
                        <div className='col-12'>
                            <Link key={index} to="/page/kab" className="col-12 main-item-img left-slick-item" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <h2>{item.name}</h2>
                                <img src={item.logo} className={ item.region !== 'Tangerang' ? 'item-logo-slick-kab' : 'item-logo-slick-kab-s' } alt={item.region} srcSet="" />
                                <p>{item.desc}</p>
                                <div className="overlay"></div>
                            </Link>
                        </div>
                    ))
                }
        </Slider>
    )
}
