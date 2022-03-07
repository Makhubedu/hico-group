import { useEffect, useState } from 'react';
import styled from 'styled-components'

import Table from './components/Table'
import UserDetails from './components/UserDetails';

import { getAllEmployees, saveEmployee, updateEmployee, deleteEmployee } from './api/employees'
import { HeadingText } from './common-styles/HeadingText';
import { Heading } from './common-styles/Heading';
import { Button } from './common-styles/InfoContainer';



const App = () =>{
    const [employees, setEmployees] = useState([])

    // Employees States
    const[employeeId, setEmployeeId] = useState(undefined)
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[solutation, setSolutation] = useState("Mr")
    const[gender, setGender] = useState("Male")
    const[employeeNumber, setEmployeeNumber] = useState(0)
    const[fullName, setFullName] = useState("")
    const[salary, setSalary] = useState(0)
    const[profileColor, setProfileColor] = useState("")

    // Styling States
    const[showInfo, setShowInfo] = useState(false)
    const[isUpdate, setIsUpdate] = useState(false)

    // Runs on first Load
    useEffect(async () =>{
        try{
            const data = await getAllEmployees()
            setEmployees(data)
        }
        catch (e){
            alert(e.message)
        }
    }, [])

    const handleAddEmployee = () =>{
        setShowInfo(!showInfo)
    }

    const clearFields = () => {
        setFirstName("")
        setLastName("")
        setSolutation("Mr")
        setGender("Male")
        setEmployeeNumber(0)
        setFullName("")
        setSalary(0)
        setProfileColor("")
    }
    // Called On Save button click for post and put request
    const handleEmployeeSave = async (emp) => {
        emp.preventDefault()

        // Error handing before making a request to API
        if(firstName === "" || lastName === "" || employeeNumber ===0 || salary === 0) {
            alert("Make Sure you fill fields in the form.")
        }else{
            try{
                // isUpdate state tells which request to make
                if(!isUpdate){
                    const data = await saveEmployee({
                        firstName,
                        lastName,
                        solutation,
                        gender,
                        employeeNumber,
                        fullName,
                        salary,
                        profileColor
                    })
                    setEmployees([...employees, data])
                }else{
                    const emp = {
                        employeeId,
                        firstName,
                        lastName,
                        solutation,
                        gender,
                        employeeNumber,
                        fullName,
                        salary,
                        profileColor,
                    }
                    const data = await updateEmployee(emp)
                    const newEmployees = employees.filter(e => e.id !== employeeId)
                    setEmployees([...newEmployees, data])
                    console.log("I came here boss")
                }
            }catch(err){
                alert(err.message)
            }
            // Clear fields
            clearFields()

        }
    }

    const handleCancel = () =>{
        clearFields()
    }

    // Populating the Employee Info on the form Fields

    const handleEmployeeClick = (emp) => {
        setShowInfo(true)
        setIsUpdate(true)
        setEmployeeId(emp.id)
        setFirstName(emp.firstName)
        setLastName(emp.lastName)
        setSolutation(emp.solutation)
        setGender(emp.gender)
        setEmployeeNumber(emp.employeeNumber)
        setFullName(emp.firstName + " " + emp.lastName)
        setSalary(emp.salary)
        setProfileColor(emp.profileColor)
    }


    const handleEmployeeDelete = async (e) =>{
        const del = await deleteEmployee(e)
        if(del === 200){
            try{
                const data = await getAllEmployees()
                setEmployees(data)
            }
            catch (e){
                alert(e.message)
            }
        }else{
            alert("Try to delete the Employee again")
        }
        clearFields()
    }

    // JSX
    return (
        <BodyContainer>
            <Heading>
                <div></div>
                <HeadingText>Current Employees</HeadingText>
                {!showInfo ?
                    <Button onClick={handleAddEmployee}>Add Employee</Button>
                    :
                    <Button btnColor="#cf222e" onClick={handleAddEmployee}>Clear Employee Info</Button>
                }
            </Heading>

            <Table 
                employees={employees} 
                handleEmployeeClick={handleEmployeeClick} 
                handleEmployeeDelete={handleEmployeeDelete} 
            />
            {showInfo ?
                <UserDetails

                    // States
                    firstName={firstName}
                    lastName={lastName}
                    solutation={solutation}
                    gender={gender}
                    employeeNumber={employeeNumber}
                    fullName={fullName}
                    salary={salary}
                    profileColor={profileColor}

                    // Setter
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    setSolutation={setSolutation}
                    setGender={setGender}
                    setEmployeeNumber={setEmployeeNumber}
                    setFullName={setFullName}
                    setSalary={setSalary}
                    setProfileColor={setProfileColor}

                    // Function Pointers
                    handleEmployeeSave={handleEmployeeSave}
                    handleCancel={handleCancel}
                />
                : null
            }   
        </BodyContainer>
        )
}

export default App;

// Styled Component For Main Layout
const BodyContainer = styled.div`
    padding: 8px;
`