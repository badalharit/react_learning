import React from 'react'

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
                    <div>
                        <ul>
                         <li>Hi {name}. I know, your age is {age} years. And you live in {city}.<br/></li>
                        </ul>
                    </div>
                )
        )}
    </div>
  )
}

export default UserDeatils