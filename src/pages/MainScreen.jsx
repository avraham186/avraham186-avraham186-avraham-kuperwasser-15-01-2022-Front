import React, { useState } from 'react'
import { weatherService } from '../services/weatherService';
import { Search } from '../cmps/Search';
import { CitiesList } from '../cmps/CitiesList';
import { CityPreview } from '../cmps/CityPreview';

export const MainScreen = () => {
    const [cities, setCities] = useState('')
    const [city, setCity] = useState('')

    const onSearch = async (searchTerm) => {
        try {
            const citiesFromback = await weatherService.searchCityAutoComplete(searchTerm)
            setCities(citiesFromback)
            return citiesFromback
        } catch (err) {
            console.log('no city came from the back', err);
        }
    }
    const onAddToFavorits = async () => {
        console.log('city on onAddToFavorits', city);
        try {
            await weatherService.save(city.Key, city.LocalizedName)
            console.log('city added to favorits')
        } catch (err) {
            console.log('the city not added to favorites', err)
        }
    }
    const onDeleteCity = async () => {
        try {
            await weatherService.remove(city.Key)
            console.log('city removed')
        } catch (err) {
            console.log('on deleteeCity', err)
        }
    }
    const isFavorit = async () => {
        if (city === '') return
        const isFav = await weatherService.isFavorite(city.Key)
        return isFav ? true : false
    }

    const onGetCity = async (cityKey) => {
        const city = await weatherService.searchCityByCityKey(cityKey)
        setCity(city)
    }

    return (
        <section className={'main-screen flex column justify-center align-center'}>
            <Search onSearch={onSearch} />
            <CitiesList cities={cities} onGetCity={onGetCity} />
            <CityPreview city={city} />
            {city && <div className="btn-toggle">
                {isFavorit() ? <button className="btn-remove-from-favorit"
                    onClick={onDeleteCity}>delete city from favorits</button>
                    : <button className="btn-add-to-favorit"
                        onClick={() => onAddToFavorits()}>add to favorit cities</button>}
            </div>}

        </section>
    )
}