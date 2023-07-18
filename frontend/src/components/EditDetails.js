import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function EditStudent(){
    const [student, setStudent] = useState({});
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const params = useParams();
    const userId = params.id;

    useEffect(() => {
        async function Getid(){
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:8070/student/get/${userId}`)

                setStudent(res.data);
                console.log(res.data);
                setName(res.data.name);
                setAge(res.data.age);
                setGender(res.data.gender);
               
                setLoading(false);
            } catch (err) {
                setLoading(false);
                alert(err.message);
            }
        }
        Getid();
    }, [userId])

    function handleSubmit(e) {
        e.preventDefault();
        const updatedStudent = {
            name,
            age,
            gender
        }
        axios.put(`http://localhost:8070/student/update/${userId}`, updatedStudent)
            .then(() => {
                alert("Student data updated");
            })
            .catch((err) => {
                alert(err);
                });
                }

                return (

                    <div className="container">
                        <h1>Update Student</h1>
                      
                        {loading ? (
                            <div>Loading...</div>


                        ) : (student && Object.keys(student).length !== 0 ? (

                            <form onSubmit={handleSubmit}>
                
                                <div className="mb-3">
                                    <label for="name" className="form-label">Student Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter here"
                                        value={student.student.name} onChange={(e) => setName(e.target.value)} />
                                </div>
                
                                <div className="mb-3">
                                    <label for="age" className="form-label">Student Age</label>
                                    <input type="text" className="form-control" id="age" placeholder="Enter here"
                                        value={student.student.age} onChange={(e) => setAge(e.target.value)} />
                                </div>
                
                                <div className="mb-3">
                                    <label for="gender" className="form-label">Student Gender</label>
                                    <input type="text" className="form-control" id="gender" placeholder="Enter here"
                                        value={student.student.gender} onChange={(e) => setGender(e.target.value)} />
                                </div>
                
                                <button type="submit" className="btn btn-primary">Update</button>
                
                            </form>
                            ) : (
            <div>Loading...</div>
        ))}
            </div>
)
}
                