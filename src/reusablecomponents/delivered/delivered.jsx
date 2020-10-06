import React from 'react';
import './delivered.scss';
import XLogo from '../../assests/Xd.jpg';


const Delivered = () => {

    return <div className="delivered">
        <div style={{ padding: "3%" }}>

            <img src={XLogo} style={{ maxWidth: "8%" }} /><span style={{ color: "white" }}>Ideas</span>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end",flexDirection:"column" }}>

            <p style={{ display: "flex", justifyContent: "flex-end", fontSize: "24px", color: "white" }}>Get XD Ideas delivered to your inbox. Free</p>
            <div style={{ border: "2px solid white", backgroundColor: "white", borderRadius: "12px", maxHeight: "21px", marginTop: "2%", padding: "12px", marginLeft: "12px" }}>
                <span>Sign Up</span>
            </div>

            <div style={{display:"flex",justifyContent:"flex-end",color:"white"}}>
     <p style={{fontSize:"12px",fontWeight:"bold"}}>Process &nbsp; Principles &nbsp; Perspective &nbsp; Design Circle &nbsp; About &nbsp; Inspiration &nbsp; Guides &nbsp; Career Tips  </p>
  </div>
        </div>

    </div>
}

export default Delivered;
