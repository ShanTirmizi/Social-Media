import React, { useContext, useState } from 'react'
import './Model.css'
import { ContextProvider } from '../../Global/Context'
import logo from '../../assests/instagram.png'

const Model = () => {
    const { model, closeModel, register, login } = useContext(ContextProvider)
    const [state, setState] = useState({
        register: true,
        login: false,
    });

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleInput = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    };

    const formsToggle = () => {
        setState({
            ...state,
            register: !state.register,
            login: !state.login,
        });
    }

    const closeForm = (e) => {
        const className = e.target.getAttribute("class");
        if (className === "model") {
          closeModel();
        }
    };

    const registerUser = (event) => {
        event.preventDefault();
        console.log(inputs)
        register(inputs);
        setInputs({ username: "", email: "", password: "" });
    };

    const userLogin = (event) => {
        event.preventDefault();
        login(inputs)
    }
    
    return (
        <>
        {
            model ? (
                <div  className='model' onClick={closeForm}>
                    <div className="model__container">
                        {state.register ? (
                            <div className="model__form">
                            <form onSubmit={registerUser}>
                                <div className="model__group">
                                    <img src={logo} alt='logo' />
                                </div>
                                <div className="model__group">
                                    <input type='text' name='username' className='model__input' placeholder='Username...' onChange={handleInput} value={inputs.username} required />
                                </div>
                                <div className="model__group">
                                    <input type='email' name='email' className='model__input' placeholder='Email...' onChange={handleInput} value={inputs.email} required />
                                </div>
                                <div className="model__group">
                                    <input type='password' name='password' className='model__input' placeholder='Create a password...' onChange={handleInput} value={inputs.password} required />
                                </div>
                                <div className="model__group">
                                    <input type='submit' value='Register' className='btn btn__smart' />
                                </div>
                                <div className="model__group">
                                    <span onClick={formsToggle}>Already have an account?</span>
                                </div>
                            </form>
                        </div>
                        ): (
                            <div className="model__form">
                            <form onSubmit={userLogin}>
                                <div className="model__group">
                                    <img src={logo} alt='logo' />
                                </div>
                                <div className="model__group">
                                    <input type='email' name='email' className='model__input' placeholder='Email...' onChange={handleInput} value={inputs.email} required />
                                </div>
                                <div className="model__group">
                                    <input type='password' name='password' className='model__input' placeholder='Create a password...'  onChange={handleInput} value={inputs.password} required />
                                </div>
                                <div className="model__group">
                                    <input type='submit' value='Login' className='btn btn__smart' />
                                </div>
                                <div className="model__group">
                                    <span onClick={formsToggle}>Create a new account</span>
                                </div>
                            </form>
                        </div>
                        )}
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
