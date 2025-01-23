import React from 'react'
import Usercard from './Usercard';

const UserDeatils = () => {
    let user_data = [
        {
            name: "John",
            age: 30,
            city: "New York"
        },
        {
            name: "Alice",
            age: 25,
            city: "Los Angeles"
        },
        {
            name: "Bob",
            age: 35,
            city: "Chicago"
        }
        ];
  return (
    <div>
        {user_data.map(
            ({name,age,city}) =>  (
                   <Usercard name={name} age={age} city={city}/>
            )
        )}
    </div>
  )
}

export default UserDeatils