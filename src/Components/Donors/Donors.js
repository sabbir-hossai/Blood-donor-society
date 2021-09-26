import React, { useEffect, useState } from 'react';
import Donor from './Donor/Donor';
import './Donors.css'

const Donors = () => {
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        fetch('./Donor.json')
            .then(res => res.json())
            .then(data => setDonors(data))
    }, [])


    return (
        <div className="donors">
            <div className="donor">
                {
                    donors.map(donor => <Donor key={donor.id} donor={donor}></Donor>)
                }

            </div>
            <div className="donors-cart">
                <h3>Blood donor:{ }</h3>
                <h4>Total blood donation:{ }</h4>
            </div>
        </div>
    );
};

export default Donors;
