import React from 'react'

import ProvPage from './ProvPage'
import ProvPageM from './ProvPage_M'

export default function index() {
    return (
        <div>
            <div className="desktop">
                <ProvPage/>
            </div>
            <div className="mobile">
                <ProvPageM/>
            </div>
        </div>
    )
}
