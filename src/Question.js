import React, { useState } from 'react'
import { questions } from './questions'

export default function Question(props) {
  const [answer, setAnswer] = useState('')
  const { questionId, setQuestionId, setView } = props
  const question = questions[questionId]

  function submitHandler(e) {
    e.preventDefault()
    checkAnswer()
  }

  function checkWinner() {
    if (questionId < questions.length-1) {
        setQuestionId(questionId+1)
      }
    else {
      alert("You win!")
      setView("welcome")
    }
  }


  function checkAnswer() {
    if (answer === question.answer) {
      alert("Answer Matched")
      checkWinner()
    }
    else {
      alert("You lose")
      setView('welcome')
    }
  }

  return (
    <form className="db ma4" onSubmit={submitHandler} method="POST" action="#">
      <h2>Your Score: {questionId * 10} </h2>
      <fieldset className="mv2">
        <legend>{question.label}</legend>
        {
          question.options.map(
            (option, index) => <RadioInput
                name="question-1"
                key={`${index}-${option}`}
                label={option}
                value={answer}
                changeHandler={() => setAnswer(option)}
              />
            )
        }
        </fieldset>
      <button type="submit">Check Answer</button>
    </form>
  )
}

function RadioInput(props) {
  const {label, name, changeHandler, value } = props

  return (
    <label className="db ma4">
      <input type="radio" name={name} onChange={changeHandler} checked={value === label} />
      <span className="ml1">{label}</span>
    </label>
  )
}