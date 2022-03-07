package com.hico.payroll.model;

import javax.persistence.*;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String firstName;
    private String lastName;
    private String gender;
    private Long employeeNumber;
    private double salary;
    private String profileColor;
    private String solutation;

    public Employee(Long id, String firstName, String lastName, String gender, Long employeeNumber, double salary, String profileColor, String solutation) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.employeeNumber = employeeNumber;
        this.salary = salary;
        this.profileColor = profileColor;
        this.solutation = solutation = "Mr";
    }


    public Employee() {
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getGender() {
        return gender;
    }

    public Long getEmployeeNumber() {
        return employeeNumber;
    }


    public double getSalary() {
        return salary;
    }

    public String getProfileColor() {
        return profileColor;
    }

    public String getSolutation() {
        return solutation;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
    public void setSolutation(String solutation) {
        this.solutation = solutation;
    }

    public void setEmployeeNumber(Long employeeNumber) {
        this.employeeNumber = employeeNumber;
    }


    public void setSalary(double salary) {
        this.salary = salary;
    }

    public void setProfileColor(String profileColor) {
        this.profileColor = profileColor;
    }
}
