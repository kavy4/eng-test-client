import React from 'react'

const Button = ({ children, className = null, ...props}) => {
    return (
        <button className={`px-4 py-1 rounded shadow border transition-all cursor-pointer hover:-translate-y-0.5 disabled:opacity-60  disabled:cursor-not-allowed ${className ? className : ''}`} { ...props }>{ children }</button>
    )
}


export default Button