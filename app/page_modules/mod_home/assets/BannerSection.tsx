import React from 'react'
import data from '../json/prices.json'

export type PriceType = {
    date: string
    bid_price: string
    offer_price: string
}
const BannerSection = () => {
    return (
        <div className='max-w-[300px] w-full mx-auto'>
            {
                data?.map((price: PriceType, index: number) => {
                    return (
                        <div className='flex place-content-between'>
                            <div>
                                {price.date}
                            </div>
                            <div>
                                {price.bid_price}
                            </div>
                            <div>
                                {price.offer_price}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BannerSection
