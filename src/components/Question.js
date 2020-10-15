import React from 'react'
import './Question.css'

const Question = ({ question }) => {
  return (
    <>
      <div className='card'>
        <h2>
          <strong>- {question.question} -</strong>
        </h2>
        <h1>{question.answer}</h1>
      </div>
      <br />
      <i>For {question.value} points</i>
    </>
  )
}

export default Question
