import React from 'react'

import KabPage from './KabPage'
import KabPageM from './KabPage_M'

export default function index() {
    return (
        <div>
            <div className='desktop'>
                <KabPage/>
            </div>
            <div className='mobile'>
                <KabPageM/>
            </div>
        </div>
    )
}
