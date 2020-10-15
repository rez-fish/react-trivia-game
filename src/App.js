import React from 'react'
import './App.css'
import Trivia from './components/Trivia'

function App() {
  return (
    <>
      <header>
        <div className='container'>
          <div className='header'>
            <h1 className='logo'>
              <p>Trivia</p>
            </h1>
            <ul className='main-nav'>
              <li className='list-item'>
                <a href='/'>Made in React</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <Trivia />
      </main>
    </>
  )
}

export default App
