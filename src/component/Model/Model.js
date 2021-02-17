import React, { useContext } from 'react'
import './Model.css'
import { ContextProvider } from '../../Global/Context'

const Model = () => {
    const { model } = useContext(ContextProvider)
    return (
        <>
        {
            model ? (
                <div  className='model'>
                    <div className="model__container">
                        <div className="model__form">
                            <h1>Hello</h1>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )
        } 
        </>
    )
}

export default Model
