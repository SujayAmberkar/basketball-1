import {Typography } from '@mui/material'
import React,{Component, } from 'react';
import './PlayerDetail.css'
import TableComponent from '../../components/TableComponent';
import { Link } from 'react-router-dom';

class PlayerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team_a:{team_name: "",playing_5: [], extras: []},
      team_b:{team_name: "",playing_5: [], extras: []},
      edit: false,
      confirmButton: "Confirm"
    }
    this.tap5 = React.createRef();
    this.tbp5 = React.createRef();
    this.taex = React.createRef();
    this.tbex = React.createRef();
    
  }

  update_players(){
    const tap5State = this.tap5.current.state
    const taexState = this.taex.current.state
    const tbp5State = this.tbp5.current.state
    const tbexState = this.tbex.current.state
    console.log(tap5State.pno1)
    console.log(taexState)
    console.log(tbp5State)
    console.log(tbexState)
 
    var taplaying5 = []
    var taextras = []
    for(var i=1; i<=11;i++ ){
      if(i<=5){taplaying5 = [...taplaying5, {[tap5State["pno"+ i]] : tap5State["pname"+ i]}]}else{
        taextras = [...taextras, {[taexState["pno"+ i]] : taexState["pname"+ i]}]
      }
    }
    this.setState({team_a: {playing_5: taplaying5, extras: taextras}})
    console.log(taplaying5, taextras)
    var tbplaying5 = []
    var tbextras = []
    for(var j=1; j<=11;j++ ){
      if(j<=5){tbplaying5 = [...tbplaying5, {[tbp5State["pno"+ j]] : tbp5State["pname"+ j]}]}else{
        tbextras = [...tbextras, {[tbexState["pno"+ j]] : tbexState["pname"+ j]}]
      }
    }
    this.setState({team_b: {playing_5: tbplaying5, extras: tbextras}})
    console.log(tbplaying5, tbextras)

    
  }

  
  confirmHandler (){
    if(this.state.confirmButton ==='Confirm'){
      this.setState({confirmButton: "Edit"})
      this.setState({edit: true})
    }else{
      this.setState({confirmButton: "Confirm"})
      this.setState({edit: false})
    }

    this.update_players()

    
  }


  render(){
    const edit = this.state.edit
    const confirmButton = this.state.confirmButton
    return (
      <div className='main-container'>
        <div className="team">
          <Typography>Team A</Typography>
          <Typography>Playing 5</Typography>
          <TableComponent ref={this.tap5} playerType={5} edit={edit}/>
          <Typography>Substitutes</Typography>
          <TableComponent ref={this.taex} playerType={6} edit={edit} />
          <button onClick={()=>this.confirmHandler()}>{confirmButton}</button>
        </div>
  
        <div className="team">
          <Typography>Team B</Typography>
          <Typography>Playing 5</Typography>
          <TableComponent ref={this.tbp5} playerType={5} edit={edit} />
          <Typography>Substitutes</Typography>
          <TableComponent ref={this.tbex} playerType={6}  edit={edit} />
          <Link to="/Scoreboard"><button>Start Match</button></Link>
        </div>
      </div>
    )
  }

}

export default PlayerDetail