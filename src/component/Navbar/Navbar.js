import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assests/instagram.png'
import { FaInstagram } from 'react-icons/fa'
import { RiInstagramFill } from "react-icons/ri";
import { ContextProvider } from '../../Global/Context';

const Navbar = () => {
    const { model, openModel, loading, user, logout } = useContext(ContextProvider)
    // console.log('context', model)
    const openForms = () => {
        openModel();
    }
    const userLogout = () => {
        logout();
    }
    const checkUser = () => {
        return !loading ? (
            !loading && user ? (
                <li>{user.displayName}/<span onClick={userLogout}>Logout</span></li>
            ) : (
                <li onClick={openForms}>Register/Login</li>
            )
        ) : (
            'Loading...'
        )
    }
    return (
        <div className='navbar__div'>
            <div className="navbar__top">
                <div className="navbar__top__logo">
                    <FaInstagram className='logo' />
                    {/* <img src={logo} alt='logo' /> */}
                </div>
            </div>
            <div className="navbar__bottom">
                {checkUser()}
            </div>
        </div>
    )
}

export default Navbar
