import React, { useState } from 'react'
import Button from './UI/Button'

const QuizItemOption = ({ quiz, options, index }) => {
    const [isFinish, setIsFinish] = useState(false)
    const [resultCard, setResultCard] = useState('')
    const [value, setValue] = useState(0)

    const OnClickNextButton = () => {
        if (value == quiz.correct) {
            setResultCard('Правильно')
            options.setPoints({
                ...options.points,
                true: options.points.true + 1
            })
        }
        else {
            setResultCard('Не правильно')
            options.setPoints({
                ...options.points,
                false: options.points.false + 1
            })
        }

        setIsFinish(true)
        options.setStep(options.step + 1)
    }

    return (
        <div className='w-9/12 p-5 rounded shadow border mx-auto my-5'>
            <h2 className='text-xl font-semibold'>{ quiz.title }</h2>
            <ul className='my-5'>
                { quiz.variants.map((variant, jndex) => <li className='flex gap-x-2'><input type='radio' disabled={isFinish} name={index} value={jndex} onChange={event => setValue(Number(event.target.value))} /><label>{ variant }</label></li>) }
            </ul>
            <Button disabled={isFinish} onClick={() => OnClickNextButton()}>Далее</Button>
            { resultCard && <div className='px-2 py-1 rounded shadow border mt-5'>{ resultCard }</div> }
        </div>
    )
}

export default QuizItemOption