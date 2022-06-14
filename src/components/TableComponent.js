import React from 'react'
// import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField
 } from '@mui/material';
function TableComponent(props) {

  return (
    <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Number</TableCell>
                        <TableCell>Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <TextField disabled={props.edit} id="outlined-basic" label="Number" variant="outlined" />
                        </TableCell>
                        <TableCell component="th" scope="row"> 
                            <TextField disabled={props.edit} id="outlined-basic" label="Player 1" variant="outlined" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <TextField disabled={props.edit} id="outlined-basic" label="Number" variant="outlined" />
                        </TableCell>
                        <TableCell component="th" scope="row"> 
                            <TextField disabled={props.edit} id="outlined-basic" label="Player 2" variant="outlined" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <TextField disabled={props.edit} id="outlined-basic" label="Number" variant="outlined" />
                        </TableCell>
                        <TableCell component="th" scope="row"> 
                            <TextField disabled={props.edit} id="outlined-basic" label="Player 3" variant="outlined" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <TextField disabled={props.edit} id="outlined-basic" label="Number" variant="outlined" />
                        </TableCell>
                        <TableCell component="th" scope="row"> 
                            <TextField disabled={props.edit} id="outlined-basic" label="Player 4" variant="outlined" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <TextField disabled={props.edit} id="outlined-basic" label="Number" variant="outlined" />
                        </TableCell>
                        <TableCell component="th" scope="row"> 
                            <TextField disabled={props.edit} id="outlined-basic" label="Player 5" variant="outlined" />
                        </TableCell>
                    </TableRow> 
                </TableBody>
            </Table>
        </TableContainer>
        
    </div>
  )
}

export default TableComponent