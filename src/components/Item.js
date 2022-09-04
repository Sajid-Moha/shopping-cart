import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function Item(props) {
    return (
        <div className="item">
                <img className="icon" src={props.img} alt={props.imgAlt}></img>
                <div className="name">{props.name}</div>
                <div className="price">{props.price}</div>
                <button className="add-to-cart" id={props.id}>
                    <FontAwesomeIcon icon={faCartPlus} />
                </button>
        </div>
    );
};

export default Item;