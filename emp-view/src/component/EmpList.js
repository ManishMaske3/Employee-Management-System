import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

function EmpList(){
    const navigate = useNavigate();
    const[employees, setEmployees] = useState(null);
    const[loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const response = await EmployeeService.getEmps();
                setEmployees(response.data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [])

    const deleteEmp = (e, id)=>{
        e.preventDefault()
        EmployeeService.deleteEmp(id)
        .then(()=>{
            if(employees){
                // it again set state after deleting one employee
                setEmployees((prevEmployees)=>{
                    return prevEmployees.filter((employee) => employee.id !== id)
                })
            }
        })
    }
    const updateEmp = (e, id)=>{
        e.preventDefault();
        navigate(`/editEmployee/${id}`)
    }
    return(
        <div className="container mx-auto my-8">
            <button 
            onClick={()=>{navigate("/AddEmp")}}
            className="bg-blue-600 hover:bg-blue-800 p-2 px-8 rounded my-5">Add 👨‍💻 New Employee</button>
            <div>
            <table className="shadow border-black">
                <thead className="bg-slate-500">
                    <tr>
                    <th className="uppercase px-5 py-3">Name</th>
                    <th className="uppercase px-5 py-3">phone</th>
                    <th className="uppercase px-5 py-3">email</th>
                    <th className="uppercase px-5 py-3">Actions</th>
                    </tr>
                </thead>
                {!loading && (
                <tbody>
                    {employees.map((employee) => (
                    <tr key={employee.id} className="hover:bg-white hover:text-black">
                        <td className="px-7 py-4 font-semibold">{employee.name}</td>
                        <td className="px-7 py-4 font-semibold">{employee.phone}</td>
                        <td className="px-7 py-4 font-semibold">{employee.email}</td>
                        <td className="px-7 py-4 font-semibold space-x-1">
                            <a 
                            onClick={(e)=> updateEmp(e, employee.id)}
                            className="hover:cursor-pointer hover:text-green-500">Edit📄</a>
                            <a 
                            onClick={(e)=> deleteEmp(e, employee.id)}
                            className="hover:cursor-pointer hover:text-red-500">Delete 🗑️</a>
                        </td>
                    </tr>
                    ))}
                </tbody>
                )}
            </table>
            </div>
        </div>
    );
}

export default EmpList;