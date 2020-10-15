import React, { useState, useEffect } from 'react'
import './Trivia.css'
import Question from './Question'

const Trivia = () => {
  const [counter, setCounter] = useState(0)
  const [question, setQuestion] = useState([])

  useEffect(() => {
    getQuestion()
  }, [counter])

  const getQuestion = async () => {
    const response = await fetch('https://jservice.io/api/random')
    const data = await response.json()
    setQuestion(data[0])
  }

  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }

  const reset = () => {
    getQuestion()
    setCounter(counter * 0)
  }

  // const checkGameState = (e) => {
  //   if (e.target.classList.value === 'show') {
  //     setTimeout(alert('HEllo'), 3000)
  //   }
  // }

  return (
    <>
      <h1 className={counter === 10 ? 'show' : 'hidden'}>You Won!</h1>
      <div className='box'>
        <div className='box-container'>
          <h1 className='box-title'>Trivia</h1>
          <p className='box-instructions'>
            Get a trivia question Hit Green check mark if you get it right.{' '}
            <br />
            Hit Red check mark if you get it wrong. <br /> See what streak you
            can get! <br /> Your goal is to reach the score of 10
          </p>
          <div className='icons'>
            <i
              className='fas fa-check-square'
              onClick={counter < 10 ? increment : false}
            ></i>
            <i
              className='fas fa-times-circle'
              onClick={counter > 0 ? decrement : false}
            ></i>
            <h1>Score: {counter}</h1>
          </div>

          <h1>Question</h1>
          <p className='submit' onClick={reset}>
            Start Over
          </p>
          <div className='box-info'>
            <Question question={question} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Trivia
