package com.hico.payroll.handler;

public class EmployeeNotFound extends RuntimeException{
    private String errorMessage;

    public EmployeeNotFound(String errorMessage) {
        super(errorMessage);
        this.errorMessage = errorMessage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
