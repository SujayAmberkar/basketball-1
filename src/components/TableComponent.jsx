import React,{ Component} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TextField
 } from '@mui/material';
import "./TableComponent.css"


class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        }

    onChange_handler(e, i){
        const no = e.target.value
        this.setState({[i] : no})
    }

    render(){
        const player_type = this.props.playerType
        var playerReg = [...Array(player_type).keys()].map(i=>i+1+(player_type%5)*5)

        return (
            <div>
                <TableContainer >
                    <Table sx={{ minWidth: 550 }} aria-label="simple table">
                        <TableBody>
                            {
                                playerReg.map((i)=>{
                                    return(
                                        <TableRow key={i}>
                                            <TableCell style={{borderBottom:'none'}} component="th" scope="row">
                                                <TextField style={{width:'90px'}} size='small' onChange={(e)=>{this.onChange_handler(e,["pno"+i])}} disabled={this.props.edit} id="outlined-basic" label="Number" variant="outlined" name={"number"+i.toString()}/>
                                            </TableCell>
                                            <TableCell style={{borderBottom:'none'}} component="th" scope="row"> 
                                                <TextField size='small' onChange={(e)=>{this.onChange_handler(e,["pname"+i])}} disabled={this.props.edit} id="outlined-basic" label={"Player "+i.toString()} variant="outlined" name={"player"+i.toString()} />
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