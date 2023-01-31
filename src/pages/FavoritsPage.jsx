import React, { useState, useEffect } from 'react'
import { CitiesList } from '../cmps/CitiesList'
import { CityPreview } from '../cmps/CityPreview'
import { weatherService } from '../services/weatherService'

export const FavoritsPage = () => {
    const [cities, setCities] = useState('')
    const [city, setCity] = useState({ key: '', LocalizedName: '', temp: '', weatherTxt: '' })

    useEffect(() => {
        const getCities = async () => {
            const favriteCities = await weatherService.getFavorites()
            setCities(favriteCities)
        }
        getCities()
    }, [])

    const onDeleteCity = async () => {
        try {
            await weatherService.remove(city.key)
            console.log('city removed')
        } catch (err) {
            console.log('on deleteeCity', err)
        }
    }

    const onGetCity = async (cityKey, LocalizedName) => {
        try {
            const cityFromBack = await weatherService.searchCityByCityKey(cityKey)
            setCity(() => {
                return {
                    key: cityKey,
                    LocalizedName,
                    temp: cityFromBack.temp,
                    weatherTxt: cityFromBack.weatherTxt
                }
            })
        } catch (err) {
            console.log('there was an error on get city', err);
        }
    }

    const isFavorite = () => true
    const onAddToFavorits = () => console.log('alredy on favorites');

    return (
        <div className='favorite-page flex column align-center justify-center'>
            <h3>favorite page</h3>
            <div className="list-and-preview flex">
                <CityPreview city={city} isFavorite={isFavorite} onDeleteCity={onDeleteCity} onAddToFavorits={onAddToFavorits} />
                <CitiesList cities={cities} onGetCity={onGetCity} />
            </div>
        </div>
    )
}