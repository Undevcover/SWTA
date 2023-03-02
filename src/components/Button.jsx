import React from "react"
import { Link } from "react-router-dom"

/* Button Component Reused Throughout The App */
const Button = ({className, value, type, onClick, form, id, path}) => {
  return (
    <button 
    id={id} 
    form={form} 
    type={type} 
    className={className}
    onClick={onClick}
    >
    <Link to={path}> {value}</Link>
    </button>
  )
}

export default Button