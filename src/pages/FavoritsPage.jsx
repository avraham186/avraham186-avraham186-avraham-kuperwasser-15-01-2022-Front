import React, { useState, useEffect } from 'react'
import { CitiesList } from '../cmps/CitiesList'
import { CityPreview } from '../cmps/CityPreview'
import { weatherService } from '../services/weatherService'

export const FavoritsPage = () => {
    const [cities, setCities] = useState('')
    useEffect(() => {
        const getCities = async () => {
            const favriteCities = await weatherService.getFavorites()
            // const res = await favriteCities.json()
            setCities(favriteCities)
        }
        getCities()
    }, [])

    return (
        <div>
            <h3>favorite page</h3>
            {console.log(cities)}
            {cities !== '' && <CitiesList cities={cities} />}
        </div>
    )
}