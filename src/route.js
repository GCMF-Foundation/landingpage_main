import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import ProvPage from './view/ProvPage';

import HomePage from './view/HomePage'
import KabPage from './view/KabPage'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Index() {

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/page/kab" element={<KabPage />} />
                <Route exact path="/page/prov" element={<ProvPage />} />
            </Routes>
        </Router>
    )
}
