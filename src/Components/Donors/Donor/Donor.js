import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHardHat, faHeart } from '@fortawesome/free-solid-svg-icons'
import './Donor.css';

const Donor = (props) => {
    // console.log(props.donor)

    const { name, id, img, bloodDonate, profession, age, counry } = props.donor;
    const element = <FontAwesomeIcon icon={faHeart} />
    return (
        <div className="row ">
            <div className="col">
                <div className="card ab">
                    <div className="img-container">
                        <img src={img} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 style={{ textAlign: 'center' }} className="card-title">{name}</h5>
                        <p className="card-text"><small>Age:{age}</small> </p>
                        <p className="card-text"><small>Country:{counry}</small> </p>
                        <p className="card-text"><small>Doner id:{id}</small> </p>
                        <p className="card-text"><small>BloodDonate: {bloodDonate}</small> </p>
                        <p className="card-text"><small>Profession: {profession}</small> </p>
                        <button onClick={() => props.bloodDonateHandel(props.donor)} className="btn btn-primary" >{element} Blood donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donor;