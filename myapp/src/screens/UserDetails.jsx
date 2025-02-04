import React from 'react'
import Usercard from './Usercard';
import user_data from '../utils/userdata';

const UserDetails = () => {
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

export default UserDetails