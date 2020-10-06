import React from 'react';
import Logo from '../../assests/header.png';
import Logo2 from '../../assests/first.webp';
import Logo3 from '../../assests/second.jpg';
import Logo4 from '../../assests/third.png';
import Logo5 from '../../assests/fourth.png';

import './body.scss';

const Body = () =>{
    return <div className="bodyPage">
        <div style={{maxWidth:"70%"}}>
            <img src={Logo} className="bodyFirst"/>
        </div>
        <div className="bodyScrollingFirst">
            <div>
          <img src={Logo2} />
          </div>
          <div>
              <img src={Logo3}/>
          </div>
          <div>
              <img src={Logo4}/>
          </div>
          <div>
              <img src={Logo5}/>
          </div>
        </div>


    </div>
    
}

export default Body;