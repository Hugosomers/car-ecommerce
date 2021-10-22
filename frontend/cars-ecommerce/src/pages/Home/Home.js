import React from 'react'
import Nav from './components/Nav'
import Shop from './components/Shop'

export default function Home() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Shop />
      </main>
    </div>
  )
}
