import React, { useEffect, useState } from 'react';


import Donor from './Donor/Donor';
import DonorInfo from './Donor/DonorInfo';
import './Donors.css';

const Donors = () => {


    const [donors, setDonors] = useState([]);
    // blood donor count
    const [donorsCount, setDonorsCount] = useState("");
    // total blood donation
    const [totalDonation, setTotalDonation] = useState(0);



    // / blood donorsInfo
    const [a, setA] = useState([])
    const [donorName, setDonorName] = useState([])



    useEffect(() => {
        fetch('./Donor.json')
            .then(res => res.json())
            .then(data => setDonors(data))
    }, []);


    const bloodDonateHandel = donors => {
        const { name } = donors;
        // blood donor count
        const showDonor = [...donorsCount, donors.name];
        setDonorsCount(showDonor)
        // total blood donation
        const totalDonotion = [JSON.parse(donors.bloodDonate) + JSON.parse(totalDonation)];
        setTotalDonation(totalDonotion)


        // blood donorsInfo
        let showA = a;
        if (!showA) {
            showA = name;
        } else {
            showA = [...showA, name];
        }
        setA(showA)
        let x = [""]
        for (const b of showA) {
            x = [...x, b];

        }
        setDonorName(x)

    }

    return (
        <div className="donors">
            <div className="donor">
                {
                    donors.map(donor => <Donor
                        key={donor.id} donor={donor}
                        bloodDonateHandel={bloodDonateHandel}></Donor>)
                }
            </div>
            <div className="donors-cart">
                <h3>Blood donor:{donorsCount.length}</h3>
                <h3>total blood donation:{totalDonation}</h3>
                <h6>{donorName}</h6>


            </div>
            <div>

            </div>
        </div>
    );
};

export default Donors;
