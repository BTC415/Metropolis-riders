import React, { useState } from 'react';
import Header from '../Header/Header';
import fakeData from '../../fakeData/data.json';
import NavCardDestination from './NavCardDestination';
import GoogleMapApi from '../DestinationInfo/GoogleMapAPi';
import './NavDestination.css';

const NavDestination = () => {
    const navDestinationInfo = fakeData.find(rd => rd.id);

    const [destinationInfo, setDestinationInfo] = useState(false);
    const [riderDestination, setRiderDestination] = useState({
        pickFromAddress: "",
        pickToAddress: ""
    });

    const onSubmits = (e) => {
        e.preventDefault();
    }

    const inputEvent = (e) => {
        const  value = e.target.value;
        const  name = e.target.name;
        setRiderDestination((preValue) => {
            if(name === "pickFromAddress"){
                return {
                    pickFromAddress: value,
                    pickToAddress: preValue.pickToAddress
                } 
            }
            else if(name === "pickToAddress"){
                return {
                    pickFromAddress: preValue.pickFromAddress,
                    pickToAddress: value
                } 
            }
        })
    }

    return (
        <div>
            <Header></Header>
            
            <div className="container">
                <div className="destination-border mb-5"></div>

                <div className="destination-info d-md-flex">
                    <div className="col-12 col-md-4">
                        <div className="destinationDetails">
                            {!destinationInfo && <form onSubmit={onSubmits}>
                                <div className="form-group  mb-3 font-weight">
                                    <label htmlFor="pickFromAddress" className="label mb-2">Pick From</label>
                                    <input type="text" className="form-control" name="pickFromAddress" id="pickFromAddress" placeholder="Enter Address" onChange={inputEvent} value={riderDestination.pickFromAddress} required/>
                                </div>
                                <div className="form-group  mb-3 font-weight">
                                    <label htmlFor="pickToAddress" className="label mb-2">Pick To</label>
                                    <input type="text" className="form-control" name="pickToAddress" id="pickToAddress" placeholder="Enter Address" onChange={inputEvent} value={riderDestination.pickToAddress} required/>
                                </div>

                                <div className="form-group mt-3">
                                <input type="submit" className="btn col-12 btn-style" value="Search" onClick={() => riderDestination.pickToAddress !== '' && setDestinationInfo(!destinationInfo)} />
                            </div>
                            </form>
                            }
                            <div className="destination-result">
                                {destinationInfo && <div className="destination-location mb-3">
                                    <h5 className="mb-4 text-capitalize">From: <span className="ml-2">{riderDestination.pickFromAddress}</span></h5>
                                    <h5 className="text-capitalize">To: <span className="ml-3">{riderDestination.pickToAddress}</span></h5>
                                </div>
                                }
                                {
                                    destinationInfo && <NavCardDestination navDestinationInfo={navDestinationInfo}></NavCardDestination>
                                }
                                {
                                    destinationInfo && <NavCardDestination navDestinationInfo={navDestinationInfo}></NavCardDestination>
                                }
                                {
                                    destinationInfo && <NavCardDestination navDestinationInfo={navDestinationInfo}></NavCardDestination>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-7">
                        <div className="map">
                            <GoogleMapApi></GoogleMapApi>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavDestination;