import React, { useEffect, useState } from 'react'

export const Search = ({ onSearch }) => {
    const [cityInput, setCity] = useState('')

    useEffect(() => {
        const cities = async () => {
            if (cityInput !== '') {
                await onSearch(cityInput)
                console.log('input', cityInput);
            }
        }
        cities()
    })

    const onSetCity = async (ev) => {
        setCity(ev.target.value)
    }
    return (
        <div className="search flex align-center justify-center">
            <input type="text" onChange={onSetCity} name="cityInput"
                value={cityInput} placeholder="search city" />
            <button className="btn-search">Search</button>
        </div>
    )
}