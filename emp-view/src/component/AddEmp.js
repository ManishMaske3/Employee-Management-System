import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
function AddEmp(){
    // this is use to redirect on onther page
    const navigate = useNavigate();
    const[employee, setEmployee] = useState(
        {
            id:"",
            name:"",
            phone:"",
            email:""
        }
    );

    const changeInput = (e) =>{
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value})
    }

    const reset = (e) =>{
        e.preventDefault();
        setEmployee({
            id:"",
            name:"",
            phone:"",
            email:""
        })
    }

    const saveData = () =>{
        // employee is from useSate() hook
        EmployeeService.saveEMP(employee)
        .then((response)=>{
            console.log("saved" + response)
            navigate("/")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return(
        <div className="max-w-xl py-4 px-8 bg-slate-500 mx-auto my-36 text-center">
            <p className="font-bold text-3xl">Add Employee 👨‍💻</p>

            <div>  
            <input 
            type="text"
            name="name"
            value={employee.name}
            onChange={(e)=>changeInput(e)}
            className="my-3 w-full py-2 text-black rounded" placeholder=" Name"/>

            <input 
            type="number"
            name="phone"
            value={employee.phone}
            onChange={(e)=>changeInput(e)}
            className="my-3 w-full py-2 text-black rounded" placeholder=" Phone No"/>

            <input 
            type="email"
            name="email"
            value={employee.email}
            onChange={(e)=>changeInput(e)}
            className="my-3 w-full py-2 text-black rounded" placeholder=" Email"/>
            </div>

            <div className="space-x-8">
                <button 
                onClick={saveData}
                className="bg-green-500 px-5 py-2 rounded hover:bg-green-800">Save</button>
                <button 
                onClick={reset}
                className="bg-blue-500 px-5 py-2 rounded hover:bg-blue-800">Clear</button>
                <button 
                onClick={()=>{navigate("/")}}
                className="bg-red-500 px-5 py-2 rounded hover:bg-red-800">Cancel</button>
            </div>
        </div>
    );
}

export default AddEmp;