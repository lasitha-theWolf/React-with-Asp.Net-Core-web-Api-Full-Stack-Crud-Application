import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function AddStudents() {
  
  let [stName, setStName] = useState("");
  const [course,setCourse] = useState("");


  function sendData(e){
    e.preventDefault();

    const newStudent = {

      stName,
      course
    }

    axios.post("https://localhost:7005/api/Student/AddStudent",newStudent).then(()=>{
      alert("Student Added")
    }).catch((err)=>{
      alert(err)
    })
   
  }

    return(
        <div className="container">

<form onSubmit={sendData}>

  <div className="mb-3">
    <label for="name" className="form-label">Student Name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter here"
    onChange={(e)=>{

      setStName(e.target.value);

    }}/>
    
  </div>

  <div className="mb-3">
    <label for="age" className="form-label">Student Course</label>
    <input type="text" className="form-control" id="age"placeholder="Enter here"
     onChange={(e)=>{

      setCourse(e.target.value);
    }}/>
    
  </div>



  <button type="submit" className="btn btn-primary">Submit</button>

</form>


        </div>
    )
  }
  
  export default AddStudents;