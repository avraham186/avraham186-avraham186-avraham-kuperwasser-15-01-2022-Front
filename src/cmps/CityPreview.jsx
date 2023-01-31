import React from 'react'

export const CityPreview = ({ city, isFavorite, onDeleteCity, onAddToFavorits }) => {



    return (
        city.LocalizedName !== '' && <div className='city-preview flex column'>
            <div className='localize-name'>{city.LocalizedName}</div>
            <div className='temp'>{city.temp} ℃</div>
            <div className='weather-txt'>{city.weatherTxt}</div>
            {isFavorite() === true ?
                <button
                    className="btn-remove-from-favorit"
                    onClick={onDeleteCity}>delete city from favorits
                </button>
                : <button
                    className="btn-add-to-favorit"
                    onClick={() => onAddToFavorits()}>add to favorit cities
                </button>}
        </div>
    )
}
