import React, { useState } from 'react'
import Tab from './Tab'
import UserInfoTable from './UserInfoTable';
import "./Tabs.css"

function Tabs({ tabs }) {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (index) => {
        setActiveTab(index + 1);
    }

    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }

    return (
        <div className='tabs-container'>
            <div className="tabs" style={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }}>
                <div style={{ display: "flex" }}>

                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            label={tab.label}
                            onClick={() => handleTabClick(index)
                            }
                            isActive={index === activeTab}
                        />
                    ))}
                </div>
                <button id='close-acc-btn' onClick={openForm}>Close Account</button>
            </div>
            <div className="tab-content">
                {/* Tab {activeTab} is Active */}
                <UserInfoTable currTab={activeTab} />

            </div>

            <div class="form-popup" id="myForm">
                <form action="" className="form-container">
                    <h1 style={{ textAlign: "center" }}>Close Account</h1>

                    <p>

                        <label htmlFor="email" style={{ fontSize: "1.2rem" }}>Email</label>
                    </p>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <div style={{ display: "flex" }}>

                        <div>

                            <span style={{ fontSize: "1.2rem", marginTop: "2rem" }}>

                                Want to file UAR?
                            </span>
                            <span>

                                <input type="radio" name="radio-1" value="Yes" id="radio-op-1" />
                                <label htmlFor="radio-op-1">Yes</label>
                                <input type="radio" name="radio-1" value="No" id="radio-op-2" />
                                <label htmlFor="radio-op-2">No</label>
                            </span>
                            <div>

                            </div>
                        </div>
                    </div>
                    <p>

                        <label htmlFor="reason" style={{ fontSize: "1.2rem" }}>Reason</label>
                    </p>
                    <select name="reason" id="reason">
                        <option selected disabled hidden>Reason</option>
                        <option>Hard Flag</option>
                        <option>Temp flag</option>
                        <option>Restricted unflag</option>
                        <option>Unflag</option>
                        <option>Reviewed</option>
                    </select>

                    <p><label htmlFor="note">Note:</label></p>
                    <textarea id="note" name="note" rows="4" cols="40"></textarea>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>

                            <input type="radio" id="radio-op-3" />
                            <label htmlFor="radio-op-3">Charge closure fee</label>
                        </div>
                        <button type="button" className="btn-close" onClick={closeForm}>Close account</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Tabs