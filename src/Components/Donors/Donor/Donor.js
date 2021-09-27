import React from 'react';
import './Donor.css';

const Donor = (props) => {
    // console.log(props.donor)

    const { name, id, img, bloodDonate, profession, age, counry } = props.donor;
    return (
        <div class="row ">
            <div class="col">
                <div class="card ab">
                    <div class="img-container">
                        <img src={img} class="card-img-top" alt="..." />
                    </div>
                    <div class="card-body">
                        <h5 style={{ textAlign: 'center' }} class="card-title">{name}</h5>
                        <p class="card-text"><small>Age:{age}</small> </p>
                        <p class="card-text"><small>Country:{counry}</small> </p>
                        <p class="card-text"><small>Doner id:{id}</small> </p>
                        <p class="card-text"><small>BloodDonate: {bloodDonate}</small> </p>
                        <p class="card-text"><small>Profession: {profession}</small> </p>
                        <button onClick={() => props.bloodDonateHandel(props.donor)} class="btn btn-primary" >Blood donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donor;