import React, { useState } from 'react'

function Online(props) {
  let Address = props.Address;
  const [Name,setName] = useState(props.name);

  const changeName = () => {
    setName("Update Name");
  }

  return (    
    <div className='box'>
        <p> Name : {Name}</p>
        <p> Address : {Address}</p>
    </div>      
  )
}

export default Online