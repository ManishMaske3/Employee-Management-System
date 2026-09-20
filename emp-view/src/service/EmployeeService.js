import axios from 'axios'


// axios is use to hit the backend api/url
const BASE_URL_SPRING_API = "http://localhost:8080/employee"
class EmployeeService{
    
    saveEMP(employee){
        return axios.post(BASE_URL_SPRING_API, employee);
    }

    getEmps(){
        return axios.get(BASE_URL_SPRING_API);
    }

    getEmpById(id){
        return axios.get(BASE_URL_SPRING_API + '/' + id);
    }

    deleteEmp(id){
        return axios.delete(BASE_URL_SPRING_API + '/' + id);
    }

    updateEmp(id, employee){
        return axios.put(BASE_URL_SPRING_API + '/' + id, employee);
    }
}

export default new EmployeeService();