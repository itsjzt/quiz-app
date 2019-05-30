import React from 'react'

export default function Welcome(props) {
  const { setView } =  props

  return (
    <header className="blue ma4">
      <h1>Quiz App</h1>
      <button onClick={() => setView('question')} >Click to open Questions</button>
    </header>
  )
}
