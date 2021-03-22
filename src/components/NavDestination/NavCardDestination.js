import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends} from '@fortawesome/free-solid-svg-icons';

const NavCardDestination = (props) => {
    const {name, seats, price, image} = props.navDestinationInfo;

    return (
        <div className="destination-rider">
            <div className="riderInfo row">
                <div className="col-3 rider-img">
                    <img src={image} className="img-fluid" alt=""/>
                    <span className="ml-2">{name}</span>
                </div>
                <div className="col-2"></div>
                <div className="col-3 userIcon">
                    <FontAwesomeIcon className="mr-2" icon={faUserFriends} />
                    {seats}
                </div>
                <div className="col-2"></div>
                <div className="col-2 riderPrice">
                    $ 
                    <span>{price}</span>
                </div>
            </div>
        </div>
    );
};

export default NavCardDestination;