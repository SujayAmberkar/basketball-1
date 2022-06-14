import React,{useState} from 'react'
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

    const [playerReg, setPlayerReg] = useState(Array.from({length: props.playerType}, (_, i) => i + 1))
    const [PlayerData, setPlayerData] = useState({})

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
                    {
                        playerReg.map((i)=>{
                            return(
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <TextField disabled={props.edit} id="outlined-basic" label="Number" variant="outlined" name={"number"+i.toString()}/>
                                    </TableCell>
                                    <TableCell component="th" scope="row"> 
                                        <TextField disabled={props.edit} id="outlined-basic" label={"Player "+i.toString()} variant="outlined" name={"player"+i.toString()} />
                                    </TableCell>
                                </TableRow>
                            )
                            
                        })
                        
                    }
                </TableBody>
            </Table>
        </TableContainer>
        
    </div>
  )
}

export default TableComponent