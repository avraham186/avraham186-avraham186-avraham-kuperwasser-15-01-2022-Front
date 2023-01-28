import React from 'react'

export const CityPreview = ({ city }) => {
    console.log('city in preview', city)
    return (
        <div>
            <div className='localize-name'>{city.LocalizedName}</div>
            <div className='favorite city'>{city.favorite}</div>
            <div className='temp'>{city.temp}</div>
        </div>
    )
}
