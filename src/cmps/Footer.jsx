import React from "react"

export function Footer() {
  const darkMod = false
  const setClassName = () => {
    return darkMod ? 'footer dark flex align-center justify-center' : 'footer flex align-center justify-center'
  }
  return (
    <footer className={setClassName()}>
      <div className="flex justify-center align-center">
        Coffeerights 2020
      </div>
    </footer>
  )
}