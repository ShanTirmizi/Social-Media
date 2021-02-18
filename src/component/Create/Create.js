import React, { useContext, useState } from 'react'
import './Create.css'
import { GoDeviceCamera } from "react-icons/go";
import { ContextProvider } from '../../Global/Context';

const Create = () => {
    const { create } = useContext(ContextProvider);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const handleImage = (event) => {
        setImage(event.target.files[0])
    }
    const createPost = (event) => {
        event.preventDefault();
        create({ title, image })
        setTitle('')
        setImage('')
    }
    return (
        <div className='create'>
            <form onSubmit={createPost}>
                <div className="create__input">
                    <input
                    type='text'
                    className='create__input__field'
                    placeholder='Share something...'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                    />
                </div>
                <div className="create__second">
                    <div className="create__second-a">
                        <label htmlFor='file'><GoDeviceCamera className='camera' /></label>
                        <input type='file' className='file' id='file' onChange={handleImage} required/>
                    </div>
                    <div className="create__second-b">
                        <input type='submit' value='Create' className='btn-sweet' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Create
