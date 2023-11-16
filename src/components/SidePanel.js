import React from 'react'
import ProfilePicture from "../assets/Image.png"
import "./SidePanel.css"

function SidePanel() {
    return (
        <div style={{ height: "100vh", borderRight: "2px solid #dddddd", flexGrow: "1", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>

                <div>
                    <h2 id='logo'>LOGO</h2>
                </div>
                <div>
                    <div className='menu-optn'>Overview</div>
                    <div className='menu-optn'>Onboarding</div>
                    <div className='menu-optn' id='monitor'>Monitoring</div>
                    <div className='menu-optn'>Flagging</div>
                    <div className='menu-optn'>Source of Income</div>
                    <div className='menu-optn'>UAR</div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img style={{ width: "5rem", height: "5rem" }} src={ProfilePicture} alt="" />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <p style={{ margin: "0" }}>Elon Musk</p>
                    <p style={{ margin: "0" }}>elon@x.com</p>
                </div>
            </div>
        </div>
    )
}

export default SidePanel