import scarecrow from './assets/scarecrow.png'
import './App.css'

function App() {
  return (
    <>
      <div>
        <div>
          <h1 classNameName="title">404 NOT FOUND</h1>
        </div>
        <div className="container">
            <div className="imagen">
              <img src={scarecrow} alt="" />
              
            </div>
            <div className="content-message">
                <h1 className="font-title">I have bad news for you</h1>
                <p className="font-paragrahp">
                    The page you are looking for might be removed 
                    or is temporarily unavailable.
                </p>
                <button className="button" type="button">BACK TO HOMEPAGE</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
