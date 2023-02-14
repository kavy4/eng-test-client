import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import QuizList from './QuizList'
import Button from './UI/Button'

const TopicPage = ({ topic }) => {
    const [startTest, setStartTest] = useState(false)

    return (
        <>
            <Button className='block mx-auto my-5' disabled={startTest}><Link to='/'>Материалы для подготовки</Link></Button>
            <Button className='block mx-auto my-5' onClick={() => setStartTest(!startTest)} disabled={startTest}>Начать тест</Button>
            { startTest && <QuizList quizList={topic.quiz} /> }
        </>
    )
}

export default TopicPage