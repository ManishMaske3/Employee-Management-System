import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

function EditEmployee(){
    const navigate = useNavigate();
    const {id} = useParams();

    const[employee, setEmployee] = useState({
        id: id,  // id is set from const {id} which is fetch from url
        name:"",
        phone:"",
        email:""
    })

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await EmployeeService.getEmpById(employee.id)
                setEmployee(response.data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData();
    },[])

    const changeInput = (e) =>{
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value})
    }

    const updateEmp = (e)=>{
        e.preventDefault()
        EmployeeService.updateEmp(id, employee)
        .then((response)=>{
            console.log("update: " + response)
            navigate("/")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return(
        <div className="max-w-xl mx-auto my-36 bg-slate-600 text-center">
            <p className="font-bold text-3xl py-3">Update 👨‍💻 Employee</p>
            <div className="mx-5">
                <div className="flex">
                <p className="text-center mt-4 mr-5">Name:</p>
                <input 
                type="text"
                name="name"
                value={employee.name}
                onChange={(e)=>changeInput(e)}
                className="w-full py-2 my-2 rounded text-black" placeholder=" name"/>
                </div>

                <div className="flex">
                <p className="text-center mt-4 mr-5">Phone:</p>
                <input 
                type="number"
                name="phone"
                value={employee.phone}
                onChange={(e)=>changeInput(e)}
                className="w-full py-2 my-2 rounded text-black" placeholder=" phone"/>
                </div>

                <div className="flex">
                <p className="text-center mt-4 mr-5">Email:</p>
                <input 
                type="email"
                name="email"
                value={employee.email}
                onChange={(e)=>changeInput(e)}
                className="w-full py-2 my-2 rounded text-black" placeholder=" email"/>
                </div>
            </div>
            <div>
                <button 
                onClick={updateEmp}
                className="bg-green-500 py-3 px-8 rounded mx-5 my-5 hover:bg-green-800">Update</button>
                <button 
                onClick={()=> navigate("/")}
                className="bg-red-500 py-3 px-8 rounded mx-5 my-5 hover:bg-red-800">Cancel</button>
            </div>
        </div>
    );
}

export default EditEmployee;