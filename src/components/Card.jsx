import React from 'react';
import './Card.css';

const Card = (props) => {
    const difficultyClass = props.difficulty ? `card-${props.difficulty}` : '';
    const imgUrl = props.imgUrl;
    if (props.question) {
        return (
            <div className={`card ${difficultyClass}`}>
                <h2>{props.flashcard.question}</h2>
                {imgUrl && <img src={imgUrl} alt="card visual" />}
            </div>
        )
    }
    else {
        return (
             <div className={`card ${difficultyClass}`}>
                <h2>{props.flashcard.answer}</h2>
            </div>
        )
    }
}

export default Card;