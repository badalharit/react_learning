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
            ({name,age,city}) => {
                return (
                    <div>
                        Hi <h2>{name}</h2>. I know, your age is <p>{age}</p> years. And you live in <p>{city}</p>
                    </div>
                )
            }
        )}
    </div>
  )
}

export default UserDeatils