import CrossSVG from '../svg/cross.svg'

import { TableContainer, TableHeader, TableBody, TableRow, TableData } from '../common-styles/Table'

const Table = (props) => {
    return(
        <TableContainer width="100%" align="center" cellpadding="0">
            <TableHeader>
                <TableRow>
                    <TableData>Employee #</TableData>
                    <TableData>First Name</TableData>
                    <TableData>Last Name</TableData>
                    <TableData>Solutation</TableData>
                    <TableData>Profile Color</TableData>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.employees && props.employees.map( employee => (
                <TableRow bgColor={employee.profileColor} key={employee.id} onClick={() => props.handleEmployeeClick(employee)}>
                    <TableData>{employee.employeeNumber}</TableData>
                    <TableData>{employee.firstName}</TableData>
                    <TableData>{employee.lastName}</TableData>
                    <TableData>{employee.solutation}</TableData>
                    <TableData>{employee.profileColor} <img src={CrossSVG} alt="Cross SVG" onClick={() => props.handleEmployeeDelete(employee.id)} /></TableData>
                </TableRow>
                
                ))}
                {/* Styled Componenrs */}
                <TableRow bgColor="#fff" style={{ height: "20px"}}>
                    <TableData><div></div></TableData>
                    <TableData><div></div></TableData>
                    <TableData><div></div></TableData>
                    <TableData><div></div></TableData>
                    <TableData><div></div></TableData>
                </TableRow>
                <TableRow bgColor="#D3D3D3" style={{ height: "20px"}}>
                    <TableData><div></div></TableData>
                    <TableData><div></div></TableData>
                    <TableData><div></div></TableData>
                    <TableData><div></div></TableData>
                    <TableData><div></div></TableData>
                </TableRow>

            </TableBody>
        </TableContainer>
    )
}

export default Table;