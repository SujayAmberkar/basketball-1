import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const data=[
    {
        name:'Sujay',
        n:'1',
        score:'10'
    },
    {
        name:'Tarun',
        n:'2',
        score:'20'
    },
    {
        name:'Rohit',
        n:'3',
        score:'101'
    },
    {
        name:'Sam Smith',
        n:'4',
        score:'1210'
    }
]

function HighlightsTable() {
  return (
    <div>
        <TableContainer component={Paper}>
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

export default HighlightsTable
