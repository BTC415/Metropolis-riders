import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import fakeData from '../../fakeData/data.json';
import './Home.css';
import RiderCart from '../RiderCart/RiderCart';


const Home = () => {

    const [riders, setRiders] = useState([]);

    useEffect(() => {
        setRiders(fakeData);
    }, [])

    return (
        <div className="main">
            <Header></Header>
           <div className="container cards-info">
                <div className="card-group row">
                    {
                        riders.map(rider => <RiderCart rider={rider} key={rider.id}></RiderCart>)
                    }
                </div>
            </div>
        </div>
    );
};


export default Home;