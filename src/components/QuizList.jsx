import React, { useState } from 'react'

import QuizItemInput from './QuizItemInput'
import QuizItemOption from './QuizItemOption'
import QuizResult from './QuizResult'

const QuizList = ({ quizList }) => {
    const [step, setStep] = useState(0)
    const [points, setPoints] = useState({
        true: 0,
        false: 0
    })

    return (
        <>
            { quizList.map((quiz, index) => {
                if (index <= step) {
                    switch (quiz.type) {
                        case 'test':
                            return <QuizItemOption quiz={quiz} options={{ step: step, setStep: setStep, points: points, setPoints: setPoints }} index={index} />
                        case 'user-input':
                            return <QuizItemInput quiz={quiz} options={{ step: step, setStep: setStep, points: points, setPoints: setPoints }} />
                    }
                }
            }) }
            { step == quizList.length && <QuizResult points={points} /> } 
        </>
    )
}

export default QuizList