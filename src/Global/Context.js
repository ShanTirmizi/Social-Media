import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../config'

export const ContextProvider = createContext();


const Context = (props) => {
    const [model, setModel] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const openModel = () => {
        setModel(true);
    }
    const closeModel = () => {
        setModel(false);
    }
    const register = async(user) => {
        const { username, email, password } = user;
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password)
            res.user.updateProfile({displayName: username})
            setModel(false)
        } catch (error) {
            console.log(error)
        }
    };

    const login = async(user) => {
        const { email, password } = user
        const res = await auth.signInWithEmailAndPassword(email, password);
        setModel(false);
    };
    const logout = () => {
        auth
          .signOut()
          .then(() => {
            setUser(null);
          })
          .catch((err) => {
            console.log(err);
        });
    };
    const create = (data) => {
        const { title, image } = data
    };
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });
    }, []);
    console.log("Login user", user)
    return (
        <ContextProvider.Provider value={{ model, openModel, closeModel, register, login, logout, loading, user, create }}>
            {props.children}
        </ContextProvider.Provider>
    )
}

export default Context
