import { useState } from 'react'
import scarecrow from './assets/scarecrow.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <div>
          <h1 class="title">404 NOT FOUND</h1>
        </div>
        <div class="container">
            <div class="imagen">
              <img src={scarecrow} alt="" />

            </div>
            <div class="content-message">
                <h1 class="font-title">I have bad news for you</h1>
                <p class="font-paragrahp">
                    The page you are looking for might be removed 
                    or is temporarily unavailable.
                </p>
                <button class="button" type="button">BACK TO HOMEPAGE</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
