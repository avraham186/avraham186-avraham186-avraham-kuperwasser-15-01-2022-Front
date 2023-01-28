import React from 'react'

export const CitiesList = ({ cities, onGetCity }) => {
    
    return (
        <div className='cities flex column align-center justify-center'>
            {cities &&
                cities.map((city) => {
                    return <span key={city.Key}
                        onClick={() => onGetCity(city.Key)}>{city.LocalizedName}
                    </span>
                })}
        </div>
    )
}