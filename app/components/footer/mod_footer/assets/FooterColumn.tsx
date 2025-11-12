import React from 'react'
import data from '../json/col_one.json'
import type { FooterColumnData, FooterLinkType } from './types'
import { Link } from 'react-router'
import '../css/mod_footer.css'

const FooterColumn = ({ data }: FooterColumnData) => {
    return (
        <div>
            <div className='footer-column-menu-header'>
                {data.header}
            </div>
            <div className='footer-column-menu'>
                {
                    data.body.map((item: FooterLinkType, index: number) => {
                        return (
                            <div className='footer-column-menu-one' key={index}>
                                <Link to={item.url}>
                                    <div className='footer-column-menu-title'>
                                        {item.title}
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FooterColumn
