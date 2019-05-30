import React, { useState } from 'react';
import Welcome from './Welcome'
import Question from './Question'

function App() {
  const [view, setView] = useState('welcome')
  const [questionId, setQuestionId] = useState(0)

  return view === 'welcome'
  ? <Welcome setView={setView} />
  : <Question questionId={questionId} setView={setView} setQuestionId={setQuestionId} />
}

export default App;
