import React from 'react';
import FirstL from '../../assests/fourth.png';
import SecondL from '../../assests/fifthP.png';
import Third from '../../assests/us.png';

import './career.scss';


const CareerTips = () => {

    return <div className="careerTips">
        <div className="firstColumn" >
            <div style={{paddingRight:"3%"}}>
                <img src={FirstL} />
            </div>
            <div style={{paddingRight:"3%"}}>
                <img src={SecondL} />
            </div>
            <div style={{paddingRight:"3%"}}>
                <img src={Third} style={{maxWidth:"84%",maxHeight:"68%"}}/>

            </div>
        </div>

    </div>
}


export default CareerTips;