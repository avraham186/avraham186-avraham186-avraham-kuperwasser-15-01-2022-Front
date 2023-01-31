import React, { useState } from 'react'
import { weatherService } from '../services/weatherService';
import { Search } from '../cmps/Search';
import { CitiesList } from '../cmps/CitiesList';
import { CityPreview } from '../cmps/CityPreview';

export const MainScreen = () => {
    const [cities, setCities] = useState('')
    const [city, setCity] = useState({ key: '', LocalizedName: '', temp: '', weatherTxt: '' })

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
            await weatherService.save(city.key, city.LocalizedName)
            console.log('city added to favorits')
        } catch (err) {
            console.log('the city not added to favorites', err)
        }
    }
    const onDeleteCity = async () => {
        try {
            await weatherService.remove(city.key)
            console.log('city removed')
        } catch (err) {
            console.log('on deleteeCity', err)
        }
    }
    const isFavorite = async () => {
        try {
            if (city.key === '') return
            const isFav = await weatherService.isFavorite(city.key)
            return isFav
        } catch (err) {
            console.log('there was an error on check if favorite', err);
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

    return (
        <section className={'main-screen flex column justify-center align-center'}>
            <Search onSearch={onSearch} />
            <div className="list-and-preview flex">
                <CityPreview city={city} isFavorite={isFavorite} onDeleteCity={onDeleteCity} onAddToFavorits={onAddToFavorits} />
                <CitiesList cities={cities} onGetCity={onGetCity} />
            </div>
        </section>
    )
}