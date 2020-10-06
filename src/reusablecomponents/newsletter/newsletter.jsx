import React from 'react';
import Logo from '../../assests/newsletter.png';
import './newsletter.scss';

const NewsLetter = ()=>{
    return <div className="newsletter">
             <div>
               <img src={Logo}/>
             </div>
             <div>
            <p className="newsletterP">Get the XD Ideas NewsLetter</p>
             </div>
             <div>

             </div>
    </div>
}

export default NewsLetter;