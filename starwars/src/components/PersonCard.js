import React from 'react';

const PersonCard = props => {
    const { name, birthday, films } = props;

    return (
        <div>
            <h1>{name}</h1>
            <h2>{birthday}</h2>
            <h3>{films}</h3>
        </div>
    )
}

export default PersonCard;