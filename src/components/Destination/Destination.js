import React from 'react';
import { useParams } from 'react-router';
import DestinationInfo from '../DestinationInfo/DestinationInfo';
import Header from '../Header/Header';
import fakeData from '../../fakeData/data.json';
import './Destination.css';

const Destination = () => {
    const {riderId} = useParams();
  
    // eslint-disable-next-line
    const riderInfo = fakeData.find(rd => rd.id == riderId);

    return (
        <div>
            <Header></Header>
            <DestinationInfo riderInfo={riderInfo}></DestinationInfo>
        </div>
    );
};

export default Destination;