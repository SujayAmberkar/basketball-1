import React,{useRef, Component} from 'react'
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
import { render } from '@testing-library/react';


class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        
      }

    onChange_handler(e, i){
        const no = e.target.value
        this.setState({[i] : no})
        // console.log(this.state)
    }

    render(){
        const player_type = this.props.playerType
        var playerReg = [...Array(player_type).keys()].map(i=>i+1+(player_type%5)*5)

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
                                        <TableRow key={i}>
                                            <TableCell component="th" scope="row">
                                                <TextField onChange={(e)=>{this.onChange_handler(e,["pno"+i])}} disabled={this.props.edit} id="outlined-basic" label="Number" variant="outlined" name={"number"+i.toString()}/>
                                            </TableCell>
                                            <TableCell component="th" scope="row"> 
                                                <TextField onChange={(e)=>{this.onChange_handler(e,["pname"+i])}} disabled={this.props.edit} id="outlined-basic" label={"Player "+i.toString()} variant="outlined" name={"player"+i.toString()} />
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
  
}

export default TableComponent