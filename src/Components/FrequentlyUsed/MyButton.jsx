import React from 'react';
import { container, black, bgcommon } from './Button.module.css'

const MyButton = ({ content, bgcolor }) => {
    return (
        <>
            <button as='button' className={`${container} ${bgcolor ? black : bgcommon}`}>{content}</button>
        </>
    );
}

export default MyButton;