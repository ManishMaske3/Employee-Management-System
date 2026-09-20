package com.crudapplication.crudapplication;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpServiceImp implements EmpService {

    // List<Employee> list = new ArrayList<>();
    @Autowired
    EmployeRepository employeRepository;

    @Override
    public String createEmployee(Employee employee) {
        // list.add(employee);
        EmployeEntity employeEntity = new EmployeEntity();
        BeanUtils.copyProperties(employee, employeEntity); // copy object from one to another which is closer to db

        employeRepository.save(employeEntity); // add into the database
        return "saved succesfully";
    }

    @Override
    public List<Employee> readEmployee() {
        List<EmployeEntity> entityList = employeRepository.findAll(); //get all the data
        List<Employee> list = new ArrayList<>();
        for (EmployeEntity employeelist : entityList) {
            Employee employee = new Employee();

            employee.setId(employeelist.getId());
            employee.setName(employeelist.getName());
            employee.setPhone(employeelist.getPhone());
            employee.setEmail(employeelist.getEmail());

            // we can also write like this
            // BeanUtils.copyProperties(employeelist, employee);
            
            list.add(employee);
        }
        return list;
    }

    @Override
    public boolean deleteEmployee(Long id) { // Long instead of long bcz .equals() method is not work on primitive data type
        // return list.removeIf(employee -> employee.getId().equals(id));
        EmployeEntity emp = employeRepository.findById(id).get();
        employeRepository.delete(emp);
        return true;
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
        EmployeEntity emp = employeRepository.findById(id).get();
        // if we write complete object with new keyword then new entry is added instead updation
        emp.setName(employee.getName());
        emp.setPhone(employee.getPhone());
        emp.setEmail(employee.getEmail());

        employeRepository.save(emp);

        return "update succesfully";
    }

    @Override
    public Employee readEmployeeById(Long id) {
        EmployeEntity emp = employeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(emp, employee); // copy the data from 1st args to 2nd
        return employee;
    }
    
    
}
