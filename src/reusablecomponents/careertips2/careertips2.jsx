import React from 'react';
import Fourth from '../../assests/school.png';
import Fifth from '../../assests/interview.jpg';
import Coconut from '../../assests/coconut.png';
import './careertips.scss';


const Careertips2 = ()=>{
    return <div>
                <div className="secondColumn">
             <div style={{maxWidth:"22%",paddingLeft:"2%"}}>
             <img src={Coconut} className="coconutJ"/>
             </div>
             <div style={{maxWidth:"21%",paddingLeft:"6%"}}>
             <img src={Fourth} className="fourthJ"/>
             </div>
             <div style={{maxWidth:"22%",paddingLeft:"3%"}}>
             <img src={Fifth} className="fifthJ"/>
             </div>
        </div>
    </div>
}


export default Careertips2;