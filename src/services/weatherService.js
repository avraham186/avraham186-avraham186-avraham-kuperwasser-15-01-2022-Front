import { httpService } from './httpService.js'

export const weatherService = {
    save,
    remove,
    searchCityByCityKey,
    searchCityAutoComplete,
    isFavorite,
    getFavorites
}

async function save(cityKey, cityName) {
    if (!cityKey || !cityName) return console.log('cant post undefined', cityKey, cityName);
    try {
        const cityToSave = {
            name: cityName,
            cityKey,
        }
        await httpService.post('favorite/', cityToSave)
        return cityToSave;
    } catch (err) {
        const msg = err
        return Promise.reject(msg)
    }
}
async function remove(cityKey) {
    try {
        await httpService.delete(`favorite/DeleteFavorite/${cityKey}`)
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
        console.log('city in searchCityByCityKey', response);
        return response
    } catch (err) {
        const msg = (err.message)
        Promise.reject(msg)
    }
}
async function getFavorites() {
    try {
        const response = await httpService.get('favorite/')
        console.log('favorite cities in getFavorites', response);
        return response
    } catch (err) {
        const msg = (err.message)
        Promise.reject(msg)
    }
}
async function isFavorite(cityKey) {
    if (!cityKey) return console.log('there is no city key', cityKey);
    try {
        const response = await httpService.get(`favorite/is-favorite/${cityKey}`)
        return response
    } catch (err) {
        const msg = (err.message)
        Promise.reject(msg)
    }
}