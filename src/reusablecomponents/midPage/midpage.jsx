import React from 'react';
import './midpage.scss';
import Logo6 from '../../assests/fifth.webp';

const MidPage = () => {

    return    <div className="fullWidth">
        <div className="forLogo">
            <img src={Logo6} />
        </div>
        <div className="forPara">
        <p style={{fontSize:"37px"}}>Why Are Elections So Hard to Design Well? -Season 3,Episode 6</p>
        </div>
    </div>
}

export default MidPage;