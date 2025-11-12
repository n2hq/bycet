import React from 'react'
import columnOneData from '../json/col_one.json'
import columnTwoData from '../json/col_two.json'
import columnThreeData from '../json/col_three.json'
import columnFourData from '../json/col_four.json'
import columnFiveData from '../json/col_five.json'

import FooterColumn from './FooterColumn'
import '../css/mod_footer.css'
import FooterHorizontalLinks from './FooterHorizontalLinks'
import FooterLogo from './FooterLogo'
import FooterColumnAlt from './FooterColumnAlt'

const MainFooter = () => {
    return (
        <div className='footer-column-wrapper'>
            <div className='footer-columns'>
                <section className='footer-column'>
                    <FooterColumn data={columnOneData} />
                </section>
                <section>
                    <FooterColumn data={columnTwoData} />
                </section>
                <section>
                    <FooterColumn data={columnThreeData} />
                </section>
                <section>
                    <FooterColumn data={columnFourData} />
                </section>
                <section>
                    <FooterColumnAlt data={columnFiveData} />
                </section>
            </div>

            <div className='footer-row'>
                <div className='footer-rule'></div>
            </div>

            <div className='footer-row'>
                <div>
                    <div>
                        <FooterLogo />
                    </div>
                    <div className='footer-horizontal-links'>
                        <FooterHorizontalLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFooter
