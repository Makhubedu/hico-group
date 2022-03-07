import { InfoContainer, FormContainer, FormContent, FormItem, FormCheck, Label, Input, Select, SaveCancel, Button, ButtonDiv } from '../common-styles/InfoContainer'
import { HeadingText } from '../common-styles/HeadingText'

const UserDetails = ({
    // state Props
    firstName,
    lastName,
    solutation,
    gender,
    employeeNumber,
    fullName,
    salary,
    profileColor,

    // State Setters Props
    setFirstName,
    setLastName,
    setSolutation,
    setGender,
    setEmployeeNumber,
    setFullName,
    setSalary,
    setProfileColor,

    // Function Pointers Props
    handleEmployeeSave,
    handleCancel
}) => {

    // Gender Controller Function
    const handleSolutation = e =>{
        const val = e.target.value
        setSolutation(val)
        if(val === "Mr"){
            setGender("Male")
        }
        else if(val !== "Mx" && val !== "Mr" && val !== "Dr" ){
            setGender("Female")
        }
        else{
            setGender("Unspecified")
        }
    }

    // Updates Button Color instantly and update the state
    const handleProfileColor = e => {
        setProfileColor(e.target.value)
    }

    // Updates full name on first name changed
    const handleFirstNameChange = e =>{
        setFirstName(e.target.value)
        setFullName(`${firstName} ${lastName}`)
    }

    // Updates full name on last name changed
    const handleLastNameChange = e =>{
        setLastName(e.target.value)
        setFullName(`${firstName} ${lastName}`)
    }

    // USer Details JSX
    return (
        <InfoContainer>
            <HeadingText>Employee Information</HeadingText>
            {/* State Controled Form */}
            <FormContainer onSubmit={handleEmployeeSave}>
                <FormContent>
                    <FormItem>
                        <Label htmlFor="id_first-name">First Name(s)*</Label>
                        <Input type="text" id='id_first-name' value={firstName} onChange={handleFirstNameChange}  />
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="id_last-name">Last Name(s)*</Label>
                        <Input type="text" id='id_last-name' value={lastName} onChange={handleLastNameChange}  />
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="id_solutation">Solutions*</Label>
                        <Select name="solutation" id="id_solutation" value={solutation} onChange={handleSolutation}>
                            <option value="Mr">Mr.</option>
                            <option value="Mrs">Mrs.</option>
                            <option value="Ms">Ms.</option>
                            <option value="Dr">Dr.</option>
                            <option value="Mx">Mx.</option>
                        </Select>
                    </FormItem>
                    <FormItem >
                        <Label >Gender*</Label>
                        <>
                            <FormCheck>
                                <input type="checkbox" name="male" id="id_male" checked={gender === "Male" ? true : false} disabled />
                                <label htmlFor="id_male">Male</label>
                            </FormCheck>
                            <FormCheck>
                                <input type="checkbox" name="female" id="id_female" checked={gender === "Female" ? true : false} disabled />
                                <label htmlFor="id_female">Female</label>
                            </FormCheck>
                            <FormCheck>
                                <input type="checkbox" name="unspecified" id="id_unspecified" checked={gender === "Unspecified" ? true : false} disabled />
                                <label htmlFor="id_unspecified">Unspecified</label>
                            </FormCheck>
                        </>
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="id_employee">Employee #*</Label>
                        <Input type="number" id='id_employee' value={employeeNumber} onChange={(e) => setEmployeeNumber(e.target.value)} />
                    </FormItem>

                </FormContent>
                {/* End of Left Section */}
                <FormContent>
                    <SaveCancel>
                        <ButtonDiv onClick={handleCancel}>Cancel</ButtonDiv>
                        <Button type="submit" btnColor={profileColor}>Save</Button>
                    </SaveCancel>
                    <FormItem>
                        <Label htmlFor="id_full-name">Full Name</Label>
                        <Input type="text" id='id_full-name' value={fullName} disabled />
                    </FormItem>

                    <FormItem>
                        <Label htmlFor="id_gross-salary">Gross Salary$PY</Label>
                        <Input type="number" id='id_gross-salary' value={salary} onChange={(e) => setSalary(e.target.value)}  />
                    </FormItem>

                    <FormItem >
                        <Label >Employee Profile Colour</Label>
                        <>
                            <FormCheck>
                                <input type="checkbox"  id="id_green" value="green" onChange={handleProfileColor} checked={profileColor === "green" ? true : false}  />
                                <label htmlFor="id_green">Green</label>
                            </FormCheck>
                            <FormCheck>
                                <input type="checkbox" id="id_blue" value="blue" onChange={handleProfileColor}  checked={profileColor === "blue" ? true : false}  />
                                <label htmlFor="id_blue">Blue</label>
                            </FormCheck>
                            <FormCheck>
                                <input type="checkbox" value="red" id="id_red" onChange={handleProfileColor}  checked={profileColor === "red" ? true : false} />
                                <label htmlFor="id_red">Red</label>
                            </FormCheck>
                            <FormCheck>
                                <input type="checkbox" value="" id="id_default" onChange={handleProfileColor}  checked={profileColor === "" ? true : false} />
                                <label htmlFor="id_default">Default</label>
                            </FormCheck>
                        </>
                    </FormItem>

                </FormContent>
            </FormContainer>
        </InfoContainer>
    )
}

export default UserDetails;