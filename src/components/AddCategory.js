import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategories }) => {
    const [inputValue, setinputValue] = useState('')
    const handleInputChange = (e) => {
        setinputValue(e.target.value)        
        //console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //cuando uso una funcion useState puedo usar el valor del estado anterior categ en este caso
        if ( inputValue.trim().length > 2 ) {
            setCategories(categ => [ inputValue,...categ ] )
            setinputValue('')
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                value={ inputValue }
                onChange={ ( e ) => handleInputChange(e) }
            />
        </form>
        

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
