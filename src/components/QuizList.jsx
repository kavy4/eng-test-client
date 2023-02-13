import React, { useState } from 'react'

import QuizItem from './QuizItem'

const QuizList = ({ quizList }) => {
    const [step, setStep] = useState(0)

    return (
        <>
            { quizList.map((quiz, index) => {
                if (index <= step) {
                    return <QuizItem quiz={quiz} stepOptions={{ step: step, setStep: setStep }} index={index} />
                }
            }) }
        </>
    )
}

export default QuizList