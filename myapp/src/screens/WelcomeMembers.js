import React from 'react'

function WelcomeMembers({name,age}) {
    return (
        <div>
            <h1 style={{color:'palevioletred',fontFamily:'cursive'}}>Welcome, {name}!</h1>
            <p style={{fontSize:'xx-large',fontFamily:'monospace'}}>Your age is {age}</p>
        </div>
    );
}

export default WelcomeMembers