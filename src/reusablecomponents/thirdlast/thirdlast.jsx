import React from 'react';
import Logo from '../../assests/logo.png';
import './thirdlast.scss';

const ThirdLast = () =>{

    return <div className="thirdlast">
           <div>
             <img src={Logo} className="paddingL"/>
           </div>
           <div>
             <p className="paddingLR"> Adobe XD Meet the Makers: MAX Sneaks for Developers</p>
           </div>
           <div>
             <p className="paddingLS">REGISTER NOW</p>
           </div>
    </div>
}

export default ThirdLast;