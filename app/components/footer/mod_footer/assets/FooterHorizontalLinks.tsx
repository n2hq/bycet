import React from 'react'
import horizontalLinks from '../json/footer_horizontal_links.json'
import { Link } from 'react-router'

const FooterHorizontalLinks = () => {
    return (
        <div className='footer-horizontal-links-wrapper'>
            {
                horizontalLinks.map((link, index: number) => {
                    return (
                        <div key={index}
                            className='footer-horizontal-link'
                        >
                            <Link to={link.url}>
                                {link.title}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FooterHorizontalLinks
