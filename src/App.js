import Student from "./components/one/Online"
import Form from "./components/one/Form";
import { useState,useRef } from "react";

const App = () => {

  const [students,setStudents] = useState([]);

  const addNewMember = (memInfo) => {
      setStudents([...students,memInfo]);
  };

  let contectSection = <h1>No Members Yet</h1>;

  if(!students.length < 1){
    contectSection = students.map(student=>(
      <Student name = {student.Name} Address = {student.Address} key= {student.Name}  />
    ));
  };

  return (
    <div className="App">
      
      <section>
        {contectSection}
      </section>
      <Form AddNewMember ={addNewMember}  />

    </div>
  );
}

export default App;
