import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from './../assests/Adobe-logo.png';
import './header.scss';
import XLogo from './../assests/Xd.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Body from './body/body';

const Header = () => {
    return <div>
        <div className="headingFirst">

            <img src={Logo} style={{ maxWidth: "8%" }} />

        </div>
        <div className="headingSecond">

              <div className="firstMenu">
                <img src={XLogo} style={{ maxWidth: "15%" }} />
                <div style={{paddingTop:"7%",fontWeight:"bolder",fontSize:"26px"}}>Ideas</div>
                </div>


            <div className="othersMenu" >
                Process
                </div>
            <div className="othersMenu">
                Principles
                </div>
            <div className="othersMenu">
                Perspective
                </div>
            <div className="othersMenu">
                Design Circle
                </div>
            <div className="searchButton">
                <p style={{paddingLeft:"31px"}}>Explore Adobe XD</p>
            </div>
            <div style={{display:"flex",justifyContent:"flex-end",paddingLeft:"2%",paddingTop:"1%"}}> <FontAwesomeIcon icon={faSearch} /></div>
            </div>

    </div>
 
}

export default Header;