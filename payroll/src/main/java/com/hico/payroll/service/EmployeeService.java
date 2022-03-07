package com.hico.payroll.service;

import com.hico.payroll.model.Employee;
import org.springframework.http.HttpStatus;

import java.util.List;

public interface EmployeeService {
    Employee saveEmployee(Employee employee);
    List<Employee> getAllEmployees();
    Employee getEmployeeById(Long id);
    Employee updateEmployeeById(Employee employee);
    void deleteEmployeeById(Long id);
}
