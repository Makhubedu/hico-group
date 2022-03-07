
import axios from 'axios'

const DOMAIN = "http://localhost:8080/api/v1/employees" // Main API End Point

// Function:name means the function name tells what the function does 😎

// Function:name
export const getAllEmployees = async () => {
    try{
        const res = await axios(DOMAIN)
        return res.data
    }catch(err){
        throw new Error(err.message)
    }    
}

// Function:name
export const saveEmployee = async (emp) => {
    const json = JSON.stringify(emp)
    try {
        const res = await axios.post(DOMAIN, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.data
    }catch(err){
        throw new Error(err.message)
    }

    
}

// Function:name
export const updateEmployee = async (emp) => {
    const json = JSON.stringify(emp)
    try {
        const res = await axios.put(DOMAIN + "/" + emp.employeeId, json, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.data
    }catch(err){
        throw new Error(err.message)
    }
}

// Function:name
export const deleteEmployee = async (id) =>{
    try {
        const res = await axios.delete(DOMAIN + "/" + id, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.status
    }catch(err){
        throw new Error(err.message)
    }
}