import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import appList from './route/GetData.js'

import QuizList from './components/QuizList'
import TopicPage from './components/TopicPage'
import MaterialForPreparation from './assets/materialForPreparation/MaterialForPreparation.png'
import Button from './components/UI/Button'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ appList.map(item => <Link to={`${item.class}-class`} className='block w-9/12 border mx-auto my-5 p-4 rounded-md shadow font-semibold transition-all hover:-translate-y-0.5'>{ item.class } класс</Link>) } />

        { appList.map(item => <Route path={`${item.class}-class`} element={ item.subjectsList.map(subject => <Link to={subject.path} className='block w-9/12 border mx-auto my-5 p-4 rounded-md shadow font-semibold transition-all hover:-translate-y-0.5'>{ subject.title }</Link>) } />) }

        { appList.map(item => item.subjectsList.map(subject => <Route path={subject.path} element={ subject.topicsList.map(topic => <Link to={topic.path} className='block w-9/12 border mx-auto my-5 p-4 rounded-md shadow font-semibold transition-all hover:-translate-y-0.5'>{topic.title}</Link>) } />)) }

        { appList.map(item => item.subjectsList.map(subject => subject.topicsList.map(topic => <Route path={topic.materialForPreparation.path} element={ <>
          <img className='mx-auto' src={MaterialForPreparation} alt='Материалы для подготовки' />
          <Button className='block mx-auto my-5'><Link to={topic.path}>Назад</Link></Button>
        </> } />))) }

        { appList.map(item => item.subjectsList.map(subject => subject.topicsList.map(topic => <Route path={topic.path} element={ <TopicPage topic={topic} /> } />))) }

        <Route path='*' element={ <h2>Такого нет</h2> } />
      </Routes>
    </div>
  )
}

export default App