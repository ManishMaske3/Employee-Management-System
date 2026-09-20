package com.crudapplication.crudapplication;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@CrossOrigin("http://localhost:3000/")
public class EmpController {
    
    // dependency injection
    @Autowired
    EmpService empService;

    @GetMapping("employee")
    public List<Employee> getAllEmployees() {
        return empService.readEmployee();
    }

    @GetMapping("employee/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return empService.readEmployeeById(id);
    }
    

    @PostMapping("employee")
    public String createEmployee(@RequestBody Employee employee) {
        return empService.createEmployee(employee);
    }
    
    @DeleteMapping("employee/{id}")
    public boolean deleteEmployee(@PathVariable long id){
        return empService.deleteEmployee(id);
    }
    
    @PutMapping("employee/{id}")
    public String updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return empService.updateEmployee(id, employee);
    }    
}
