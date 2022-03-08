import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './HomePage.css'
import SlickKab1 from '../SlickKab/slickKab1';
import SlickKab2 from '../SlickKab/slickKab2';
import SlickProv from '../SlickProv/slickProv';

export default function Main() {

    return (
        <div className='main-container'>
            <div className="main-web-container" data-aos={'fade-down'}>
                <div className="main-item">
                    <div className="d-flex">
                        <SlickKab1 />
                        <SlickKab2 />
                    </div>
                    <div className="col-12">
                        <SlickProv />
                    </div>
                </div>
            </div>
        </div>
    )
}
