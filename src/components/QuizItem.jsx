import React, { useState } from 'react'

const QuizItem = ({ quiz, stepOptions, index }) => {
    const OnClickNextButton = () => {
        setIsFinish(true)
        stepOptions.setStep(stepOptions.step + 1)
    }

    const [isFinish, setIsFinish] = useState(false)

    return (
        <div className='w-9/12 p-5 rounded shadow border mx-auto my-5'>
            <h2 className='text-xl font-semibold'>{ quiz.title }</h2>
            <ul className='my-5'>
                { quiz.variants.map(variant => <li className='flex gap-x-2'><input type='radio' disabled={isFinish} /><label>{ variant }</label></li>) }
            </ul>
            <button className='px-4 py-1 rounded shadow border transition-all cursor-pointer hover:-translate-y-0.5 disabled:opacity-60  disabled:cursor-not-allowed' disabled={isFinish} onClick={() => OnClickNextButton()}>Далее</button>
        </div>
    )
}

export default QuizItem