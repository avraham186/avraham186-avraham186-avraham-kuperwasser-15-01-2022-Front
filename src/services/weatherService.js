import { httpService } from './httpService.js'

export const weatherService = {
    save,
    remove,
    searchCityByCityKey,
    searchCityAutoComplete,
    isFavorite,
    getFavorites
}

async function save(cityKey, cityName, temp) {
    try {
        const cityToSave = {
            name: cityName,
            cityKey,
        }
        await httpService.post(`/api/favorite/${cityToSave}`)
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
        console.log('favorite cities', response);
        return response
    } catch (err) {
        const msg = (err.message)
        Promise.reject(msg)
    }
}
async function getFavorites() {
    try {
        const response = await httpService.get('favorite/')
        console.log('favorite cities', response);
        return response
    } catch (err) {
        const msg = (err.message)
        Promise.reject(msg)
    }
}
async function isFavorite(cityKey) {
    try {
        const response = await httpService.get(`favorite/is-favorite/${cityKey}`)
        return response
    } catch (err) {
        const msg = (err.message)
        Promise.reject(msg)
    }
}