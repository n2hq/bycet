import React from 'react'
import HeroAlt from '~/components/body/HeroAlt'
import AboutFactsSection from '~/page_modules/mod_about/assets/AboutFactsSection'
import AboutShowcaseSection from '~/page_modules/mod_about/assets/AboutShowcaseSection'
import AboutUsSection from '~/page_modules/mod_about/assets/AboutUsSection'
import PageBarSection from '~/page_modules/mod_home/assets/PageBarSection'

const About = () => {
    const bgImg = `https://unbound.radiantthemes.com/wp-content/uploads/2018/05/demo-eighteen-banner.jpg?id=4910`
    const title = `Your Challenge, Our Shared Mission.`
    const description = `Bring us your most complex business problems. We partner with you to design and build the intelligent software solutions that turn your challenges into your greatest competitive advantages. Let's start building what's next, together.`

    return (
        <div>
            <HeroAlt
                pageTitle='About us'
                bgImg={bgImg}
                title={title}
                description={description}
                showContact={true}
            />
            
            <PageBarSection />
            
            <AboutFactsSection />
            
            
            
            


            
            
            <AboutUsSection />
            
        </div>
    )
}

export default About
