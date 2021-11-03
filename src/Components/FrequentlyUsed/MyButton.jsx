import React from 'react';
import { container } from './Button.module.css'

const MyButton = ({content}) => {
    return (
        <>
            <button as='button' className={container}>{content}</button>
        </>
    );
}

export default MyButton;