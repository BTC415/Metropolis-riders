import React from 'react';
import { Link } from 'react-router-dom';
import './RiderCart.css';

const RiderCard = (props) => {
    const {image, name, id} = props.rider;
    
    return (
        <div className="col-md-3 card-info">
            <Link to={`/rider/${id}`}>
                <div className="card mb-5">
                    <img src={image} className="img-fluid" alt=""/>
                    <div className="card-body">
                        <h4>{name}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RiderCard;