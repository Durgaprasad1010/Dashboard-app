import React from 'react'
import Tabs from './Tabs';

function MonitoringPage() {

    const tabInfo = [
        { label: "Pending" },
        { label: "Completed" }
    ];

    return (
        <div style={{ flexGrow: "6" }}>
            <h1 className='heading'>Monitoring</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>

                <Tabs tabs={tabInfo} />
                {/* <button>Close Account</button> */}
            </div>
        </div>
    )
}

export default MonitoringPage