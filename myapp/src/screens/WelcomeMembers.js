import React from 'react'

function WelcomeMembers(props) {
    return (
        <div>
            <h1 style={{color:'greenyellow'}}>Welcome, {props.name}!</h1>
        </div>
    );
}

export default WelcomeMembers