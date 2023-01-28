import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/main.scss';
import { Header } from './cmps/Header'
import { Footer } from './cmps/Footer'
import { MainScreen } from './pages/MainScreen'
import { FavoritsPage } from './pages/FavoritsPage'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/favorite-cities" element={<FavoritsPage />} />
        <Route path="/" element={<MainScreen />}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}