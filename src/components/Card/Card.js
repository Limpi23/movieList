import React from 'react';
import PropTypes from 'prop-types';


const Card = ({ movie }) => {
    return (
        <div className="card">
            <h2>{ `#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
            <p>{`Distributor: ${movie.distributor}`}</p>        
            <p>{`Amount: ${movie.amount}`}</p>
        </div>
    );
    
};

Card.protoTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        distributor: PropTypes.string,
        year: PropTypes.number,
        amount: PropTypes.string,
        img: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string
        }),
        ranking: PropTypes.number
    }).isRequired
};

export default Card;