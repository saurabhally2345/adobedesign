import React from 'react';
import Logo from '../../assests/firstP.png';
import Logo1 from '../../assests/secondP.png';
import Logo2 from '../../assests/thirdP.png';
import Logo3 from '../../assests/fourthP.png';
import Logo4 from '../../assests/fifthP.png';
import Logo5 from '../../assests/sixthP.png';
import Logo6 from '../../assests/header.png';
import './anotherpage.scss';

const Anotherpage = () => {

    return <div style={{ display: "flex", flexDirection: "row",marginTop:"3%" }}>
        <div className="anotherpage">
            <div >
                <img src={Logo} />
            </div>
            <div>
                <img src={Logo1} />
            </div>
            <div>
                <img src={Logo2} />
            </div>
            <div>
                <img src={Logo3} />
            </div>
            <div>
                <img src={Logo4} />
            </div>
            <div>
                <img src={Logo5} />
            </div>
        </div>
        <div className="secondScroll">
                <img src={Logo6}  className="anotherImage"/>
            </div>

    </div>

}

export default Anotherpage;