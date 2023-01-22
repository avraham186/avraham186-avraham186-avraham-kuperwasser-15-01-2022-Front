import { httpService } from './httpService.js'

export const weatherService = {
    save,
    remove,
    searchCityByCityKey,
    searchCityAutoComplete,
    isFavorite
}

async function save(cityKey, cityName, temp) {
    try {
        const cityToSave = {
            name: cityName,
            cityKey,
        }
        await httpService.post(`/api/favorit/${cityToSave}`)
        return cityToSave;
    } catch (err) {
        const msg = err
        return Promise.reject(msg)
    }
}
async function remove(cityKey) {
    try {
        await httpService.delete(`DeleteFavorite/${cityKey}`)
    } catch (err) {
        const msg = err
        throw new Error(msg)
    }
}

async function searchCityAutoComplete(searchTerm) {
    try {
        const cities = await httpService.get(`Search/?searchTerm=${searchTerm}`)
        return cities
    } catch (err) {
        const msg = (err.message);
        Promise.reject(msg)
    }
}
async function searchCityByCityKey(cityKey) {
    try {
        const response = await httpService.get(`GetCurrentWeather/${cityKey}`)
        // const city = await response.json()
        return response
    } catch (err) {
        const msg = (err.message)
        Promise.reject(msg)
    }
}
async function isFavorite(cityKey) {
    try {
        const response = await httpService.get(`/api/favorit/is-favorite/${cityKey}`)
        return response
    } catch (err) {
        const msg = (err.message)
        Promise.reject(msg)
    }
}