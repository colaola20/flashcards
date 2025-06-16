import React from 'react';
import './Card.css';

const Card = (props) => {
    if (props.question) {
        return (
            <div className='card'>
                <h2>{props.flashcard.question}</h2>
            </div>
        )
    }
    else {
        return (
             <div className='card'>
                <h2>{props.flashcard.answer}</h2>
            </div>
        )
    }
}

export default Card;