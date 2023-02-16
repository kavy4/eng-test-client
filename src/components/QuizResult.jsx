import React from 'react'
import Button from './UI/Button'
import { Link } from 'react-router-dom'

const QuizResult = ({ points, path }) => {
    return (
        <div className='w-9/12 px-5 py-2 rounded shadow border mx-auto my-5 text-center'>
            <p className='text-xl font-semibold'>{ points.true } из { points.true + points.false }</p>
            { points.true / (points.true + points.false) * 100 < 60 && (
                <>
                    <div className='my-5'>У вас слишком низкий балл. Возможно, стоило бы повторить тему</div>
                    <Button><Link to={path}>Материалы для подготовки</Link></Button>
                </>
            ) }
        </div>
    )
}

export default QuizResult