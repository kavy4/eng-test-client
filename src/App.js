import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import appList from './route/GetData.js'

import QuizList from './components/QuizList'

function App() {
  return (
    <div className='App'>
      <Routes>
        { appList.map(item => <Route path={item.path} element={ item.topicsList.map(topic => <Link to={topic.path} className='block w-9/12 border mx-auto my-5 p-4 rounded-md shadow font-semibold transition-all hover:-translate-y-0.5'>{ topic.title }</Link>) } />) }

        { appList.map(item => item.topicsList.map(topic => <Route path={topic.path} element={ <QuizList quizList={topic.materialForPreparation.quiz} /> } />)) }

        <Route path='/' element={ appList.map(item => <Link to={item.path} className='block w-9/12 border mx-auto my-5 p-4 rounded-md shadow font-semibold transition-all hover:-translate-y-0.5'>{ item.title }</Link>) } />

        <Route path='*' element={ <h2>Такого нет</h2> } />
      </Routes>
    </div>
  )
}

export default App