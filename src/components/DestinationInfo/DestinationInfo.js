import React from 'react';
import { useState } from 'react';
import CartRiderInfo from '../CartRiderInfo/CartRiderInfo';
import GoogleMapApi from './GoogleMapAPi';
import './DestinationInfo.css';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


const DestinationInfo = (props) => {
    const riderInfo = props.riderInfo;

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
                            <input type="submit" className="btn col-12 btn-style" value="Search" onClick={() => riderDestination.pickToAddress !== ''  && riderDestination.pickFromAddress !== '' && setDestinationInfo(!destinationInfo)} />
                        </div>
                        </form>
                        }
                        <div className="destination-result">
                            {destinationInfo && 
                                <div className="destination-location mb-3">
                                    <Timeline>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent className="text-capitalize content">{riderDestination.pickFromAddress}</TimelineContent>
                                        </TimelineItem>
            
                                        <TimelineItem className="MuiTimelineItemStyle">
                                            <TimelineSeparator>
                                                <TimelineDot />
                                            </TimelineSeparator>
                                            <TimelineContent className="content text-capitalize">{riderDestination.pickToAddress}</TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </div>
                            }
                            {
                                destinationInfo && <CartRiderInfo riderInfo={riderInfo}></CartRiderInfo>
                            }
                            {
                                destinationInfo && <CartRiderInfo riderInfo={riderInfo}></CartRiderInfo>
                            }
                            {
                                destinationInfo && <CartRiderInfo riderInfo={riderInfo}></CartRiderInfo>
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
    );
};

export default DestinationInfo;