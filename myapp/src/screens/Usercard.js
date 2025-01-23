import React from 'react'

const Usercard = ({name,age,city}) => {
  return (
    <div>
        <ul>
            <li>Hi {name}. I know, your age is {age} years. And you live in {city}.<br/></li>
        </ul>
    </div>
  )
}

export default Usercard