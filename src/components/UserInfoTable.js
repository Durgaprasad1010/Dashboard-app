import React, { useState } from 'react'
import { userData } from '../data/UserData.js'
import "./UserInfoTable.css"

function UserInfoTable({ currTab }) {
    const [search, setSearch] = useState('')
    if (currTab === 1) {

        return (
            <div className='users-container'>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>

                    <input type="text" onChange={(e) => {
                        setSearch(e.target.value)
                    }} placeholder='Search' style={{ width: "50rem", height: "3rem" }} />
                    <select style={{ padding: "0.7rem", margin: "1rem" }}>
                        <option selected disabled hidden>Trigger reason</option>
                        <option>Hard Flag</option>
                        <option>Temp flag</option>
                        <option>Restricted unflag</option>
                        <option>Unflag</option>
                        <option>Reviewed</option>
                    </select>
                    <select style={{ padding: "0.7rem", margin: "1rem" }}>
                        <option selected disabled hidden>Risk level</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>

                    </select>

                </div>
                <table>
                    <thead>

                        <tr>
                            <th>User</th>
                            <th>Risk level</th>
                            <th>Trigger reason</th>
                            <th>In queue for</th>
                            <th>Date added on</th>
                            <th>Previously reviewed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.filter((item) => {
                            return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
                        }).map((user) => (
                            <tr key={user.id}>
                                <td style={{ display: "flex", flexDirection: "column" }}>
                                    <p>
                                        <strong>

                                            {user.name}
                                        </strong>
                                    </p>
                                    <p>{user.email}</p>
                                </td>
                                <td>{user.riskLevel}</td>
                                <td>
                                    <strong>
                                        {user.triggerReason}
                                    </strong>
                                </td>
                                <td>
                                    <strong>

                                        {user.inQueue}
                                    </strong>
                                </td>
                                <td>{user.dateAdded}</td>
                                <td style={{ display: "flex", flexDirection: "column" }}>
                                    <p>
                                        <strong>

                                            {user.prevRev}
                                        </strong>
                                    </p>
                                    <p>{user.currDate}</p>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div className='users-container'>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>

                    <input type="text" onChange={(e) => {
                        setSearch(e.target.value)
                    }} placeholder='Search' style={{ width: "50rem", height: "3rem" }} />
                    <select style={{ padding: "0.7rem", margin: "1rem" }}>
                        <option selected disabled hidden>Trigger reason</option>
                        <option>Hard Flag</option>
                        <option>Temp flag</option>
                        <option>Restricted unflag</option>
                        <option>Unflag</option>
                        <option>Reviewed</option>
                    </select>
                    <select style={{ padding: "0.7rem", margin: "1rem" }}>
                        <option selected disabled hidden>Risk level</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>

                    </select>

                </div>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Risk level</th>
                            <th>Action reason</th>
                            <th>Time to close</th>
                            <th>Date added on</th>
                            <th>Action taken by</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.filter((item) => {
                            return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
                        }).map((user) => (
                            <tr>
                                <td style={{ display: "flex", flexDirection: "column" }}>
                                    <p>
                                        <strong>

                                            {user.name}
                                        </strong>
                                    </p>
                                    <p>{user.email}</p>
                                </td>
                                <td>{user.riskLevel}</td>
                                <td>
                                    <strong>

                                        {user.action}
                                    </strong>
                                </td>
                                <td>
                                    <strong>

                                        {user.closeTime}
                                    </strong>
                                </td>
                                <td>{user.dateAdded}</td>
                                <td style={{ display: "flex", flexDirection: "column" }}>
                                    <p>
                                        <strong>

                                            {user.actionTaken}
                                        </strong>
                                    </p>
                                    <p>{user.actionTakenEmail}</p>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        )
    }
}

export default UserInfoTable