import React, { useEffect, useState } from 'react'
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
import bgMadrasahJateng from '../../assets/img/main-bg/madrasah-jateng.png'
import bgMadrasahSumut from '../../assets/img/main-bg/madrasah-sumut.png'
import bgKalimantanTimur from '../../assets/img/web-bg/kalimantan-timur.jpg'

import iconArrow from '../../assets/img/icon/arrow.svg'

import '../KabPage/KabPage.css'
import { Link } from 'react-router-dom'

export default function ProvPage() {

    const [main1, setMain1] = useState([])
    const [main2, setMain2] = useState([])
    const [main3, setMain3] = useState([])

    const summary = {
        items1: [
            {
                'name': 'Geschool D.I Yogyakarta',
                'desc': 'diy.geschool.net',
                'link': 'https://diy.geschool.net',
                'region': 'Yogyakarta',
                'logo': `${logoYogyakarta}`,
                'bg': `${bgYogyakarta}`
            },
            {
                'name': 'Geschool Banten',
                'desc': 'banten.geschool.net',
                'link': 'https://banten.geschool.net',
                'region': 'Banten',
                'logo': `${logoBanten}`,
                'bg': `${bgBanten}`
            },
            {
                'name': 'Geschool Sumbar',
                'desc': 'smasumbar.geschool.net',
                'link': 'https://smasumbar.geschool.net',
                'region': 'Sumbar',
                'logo': `${logoSumbar}`,
                'bg': `${bgSumbar}`
            }
        ],
        items2: [
            {
                'name': 'Madrasah DIY',
                'desc': 'madrasahdiy.net',
                'link': 'https://madrasahdiy.net',
                'region': 'Madrasah-DIY',
                'logo': `${logoMadrasahDiy}`,
                'bg': `${bgMadrasahDiy}`
            },
            {
                'name': 'Muhammadiyah',
                'desc': 'muhammadiyah.geschool.net',
                'link': 'https://muhammadiyah.geschool.net',
                'region': 'Muhammadiyah',
                'logo': `${logoMuhammadiyah}`,
                'bg': `${bgMuhammadiyah}`
            },
            {
                'name': 'Madrasah Sumbar',
                'desc': 'madrasahsumbar.net',
                'link': 'https://madrasahsumbar.net',
                'region': 'Madrasah-Sumbar',
                'logo': `${logoMadrasahSumbar}`,
                'bg': `${bgMadrasahSumbar}`
            },
        ],
        items3: [
            {
                'name': 'Madrasah Jateng',
                'desc': 'madrasahjateng.net',
                'link': 'https://madrasahjateng.net',
                'region': 'Madrasah-Jateng',
                'logo': `${logoMadrasahSumbar}`,
                'bg': `${bgMadrasahJateng}`
            },
            {
                'name': 'Madrasah Sumut',
                'desc': 'madrasahsumut.net',
                'link': 'https://madrasahsumut.net',
                'region': 'Madrasah-Sumut',
                'logo': `${logoMadrasahSumbar}`,
                'bg': `${bgMadrasahSumut}`
            },
            {
                'name': 'Kalimantan Timur',
                'desc': 'kaltim.geschool.net',
                'link': 'https://kaltim.geschool.net',
                'region': 'Yogyakarta',
                'logo': `${logoKalimatanTimur}`,
                'bg': `${bgKalimantanTimur}`
            }
        ]
    }

    useEffect(() => {
        setMain1(summary.items1)
        setMain2(summary.items2)
        setMain3(summary.items3)
    }, [])

    return (
        <div className="main-container text-center kab-page">
            <h2>Selamat Datang di Web Provinsi / Institusi</h2>
            <div className="main-content-container">
                <div className="content-item d-flex justify-content-center mb-5" data-aos={'zoom-in'}>
                    {
                        main1.map((item, index) => (
                            <a key={index} target="_blank" rel="noreferrer" href={item.link} className="item mx-3" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <h4>{item.name}</h4>
                                <img src={item.logo} className={item.region !== 'Yogyakarta' ? 'item-logo-prov' : 'item-logo'} alt={item.region} srcSet="" />
                                <p>{item.desc}</p>
                                <div className="overlay"></div>
                            </a>
                        ))
                    }
                </div>
                <div className="content-item d-flex justify-content-center mb-5" data-aos={'zoom-in'}>
                    {
                        main2.map((item, index) => (
                            <a key={index} target="_blank" rel="noreferrer" href={item.link} className="item mx-3" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <h4>{item.name}</h4>
                                <img src={item.logo} className={item.region !== 'Yogyakarta' ? 'item-logo-prov' : 'item-logo'} alt={item.region} srcSet="" />
                                <p>{item.desc}</p>
                                <div className="overlay"></div>
                            </a>
                        ))
                    }
                </div>
                <div className="content-item d-flex justify-content-center mb-5" data-aos={'zoom-in'}>
                    {
                        main3.map((item, index) => (
                            <a key={index} target="_blank" rel="noreferrer" href={item.link} className="item mx-3" style={{ background: `url(${item.bg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <h4>{item.name}</h4>
                                <img src={item.logo} className={item.region !== 'Yogyakarta' ? 'item-logo-prov' : 'item-logo'} alt={item.region} srcSet="" />
                                <p>{item.desc}</p>
                                <div className="overlay"></div>
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className="back-container">
                <Link to="/" className='btn-back'> <img src={iconArrow} alt="" srcset="" /> Home</Link>
            </div>
        </div>
    )
}
