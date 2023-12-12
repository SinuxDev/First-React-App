import { useRef, useState } from "react"


const  Form = (props) => {

  const [Name,setName] = useState("");
  const [Address,setAddress] = useState("");

  const trackName = (event) =>{
    setName(event.target.value);
  };

  const trackAddress = (event) => {
    setAddress(event.target.value);
  };

  const showData = (event) =>{
    event.preventDefault();
    const data ={
       Name,
       Address,
    };
    props.AddNewMember(data);

    setName("")
    setAddress("")
  };

  return (
    <div>
      <form action="" onSubmit={showData} >
          <input type="text" placeholder="Name" onChange={trackName} /> 
          <input type="text" placeholder="Address" onChange={trackAddress} />
          <button type="Submit" >Submit</button>
      </form>
    </div>
  )
}


export default Form

