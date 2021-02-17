import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assests/logo.jpg'
import { BiSearchAlt } from 'react-icons/bi'
import {
    FaTelegramPlane,
    FaRegCompass,
    FaRegHeart,
  } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { ContextProvider } from '../../Global/Context';

const Navbar = () => {
    const { model, openModel } = useContext(ContextProvider)
    console.log('context', model)
    const openForms = () => {
        openModel();
    }
    return (
        <div className='navbar'>
            <div className="navbar__top">
                <div className="navbar__top__logo">
                    <img src={logo} alt='logo' />
                </div>
            </div>
            <div className="navbar__middle">
                <div className="navbar__middle__search">
                    <input type="text" className='navbar__search' placeholder="Search" />
                    <BiSearchAlt className='searchIcon' />
                </div>
            </div>
            <div className="navbar__bottom">
                <li>
                    <MdHome className="navbar__icons" />
                </li>
                <li>
                    <FaTelegramPlane className="navbar__icons" />
                </li>
                <li>
                    <FaRegCompass className="navbar__icons" />
                </li>
                <li>
                    <FaRegHeart className="navbar__icons" />
                </li>
                <li onClick={openForms}>Register/Login</li>
            </div>
        </div>
    )
}

export default Navbar
