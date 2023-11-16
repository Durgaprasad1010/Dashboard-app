import React, { useState } from 'react'

function Tab({ label, onClick, isActive }) {
    return (
        <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>{label}</div>
    )
}

export default Tab