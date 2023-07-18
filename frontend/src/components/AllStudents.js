import React, {useState, useEffect} from "react";
import axios from "axios"; 



export default function AllStudent(){

    const [students, setStudents] = useState([]);
    


    useEffect(()=>{

        function getStudent(){
            axios.get("https://localhost:7005/api/Student/Get Student").then((res)=>{
               
               setStudents(res.data);
            }).catch((err)=>{
                alert("err.message");
            })
        }
        getStudent();
        

    },[])

    //search

    function filterData(students,searchKey){
        const result = students.filter((student)=>
        student.stName.includes(searchKey)
        )
        
        setStudents(result);
    }

   function handleSearchArea  (e){
        const searchKey= e.currentTarget.value;

        axios.get("https://localhost:7005/api/Student/Get Student").then((res)=>{
            // console.log(res.data);  
          filterData(res.data,searchKey);
         })
    }


 return(
    <div className="container">
        <div className="row">
            <div className="col-lg-9-mt-2 mb-2">
                <h4>All Student</h4>
            </div>
            <div className="col-lg-9-mt-2 mb-2">
                <input className="form-control"
                 type="search"
                 placeholder="Search"
                 name="searchQuery"
                 onChange={handleSearchArea}>

                 </input>
            </div>
        </div>
        
        
            
                
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Course</th>
                            
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    
                    {students.map((students,index) =>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>

                            <td>
                                <a href={`/get/${students._id}`} style={{textDecoration:'none'}}>
                                {students.stName}
                                </a>
                                </td>
                            <td>{students.course}</td>
                            
                            <td>
                                <a className="btn btn-warning" href={`/update/${students._id}`}>
                                 <i className="fas fa-edit"></i>&nbsp;Edit
                                 </a>
                                &nbsp;
                                &nbsp;
                                <a className="btn btn-danger" href={`/delete/${students._id}`}>
                                <i className="fas fa-trash-alt"></i>&nbsp; Delete

                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:"white"}}>Add New Student</a></button>
 
    </div>
)
 }