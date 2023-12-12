import { useRef } from "react"


const  Form = (props) => {

  const nameInputRef = useRef();
  const addressInputRef = useRef();

  const showData = (event) =>{
    event.preventDefault();
    if(nameInputRef.current.value.trim().length == 0 || addressInputRef.current.value.trim().lenght == 0){
      alert("Please fill value for member data")
      return;
    }
    const data ={
      Name : nameInputRef.current.value,
      Address : addressInputRef.current.value 
    };
    props.AddNewMember(data);

  
  };

  return (
    <div>
      <form action="" onSubmit={showData} >
          <input type="text" placeholder="Name"  ref={nameInputRef} /> 
          <input type="text" placeholder="Address" ref={addressInputRef} />
          <button type="Submit" >Add New Member</button>
      </form>
    </div>
  )
}

export default Form

