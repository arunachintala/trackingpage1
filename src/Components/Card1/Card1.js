
import React from 'react';
import './Card1.css';
import Button from '../Button/Button';

function Card1({ text1, text2 }) {
    return (
        <div className='Card-container' style={{ border: '1px solid #D9D9D9' }}>
            <p className='order-id'>Order id: <span>{text1}</span></p>
            <p className='status'>Status: <span>{text2}</span></p>
            <div className='button-container'>
                <Button />
            </div>
        </div>
    );
}

export default Card1;
