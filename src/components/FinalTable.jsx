import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography
 } from '@mui/material';
 import './FinalTable.css'


function FinalTable() {
    const data=[
        {
            name:'Sujay',
            n:'1',
            score:'10'
        },
        {
            name:'Rohit',
            n:'2',
            score:'20'
        },
        {
            name:'Tarun',
            n:'3',
            score:'101'
        },
        {
            name:'Sam Smith',
            n:'4',
            score:'1210'
        }
    ]
  return (
    <div className='final-table-container'>
        
        <TableContainer component={Paper}>
        <Typography>Team A</Typography>
            <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Number</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((i)=>{
                            return( 
                                <TableRow>
                                    <TableCell component="th" scope="row">{i.n}</TableCell>
                                    <TableCell component="th" scope="row">{i.name}</TableCell>
                                    <TableCell component="th" scope="row">{i.score}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                    
                </TableBody>
            </Table>
            <Typography>Team B</Typography>
            <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Number</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((i)=>{
                            return( 
                                <TableRow>
                                    <TableCell component="th" scope="row">{i.n}</TableCell>
                                    <TableCell component="th" scope="row">{i.name}</TableCell>
                                    <TableCell component="th" scope="row">{i.score}</TableCell>
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

export default FinalTable