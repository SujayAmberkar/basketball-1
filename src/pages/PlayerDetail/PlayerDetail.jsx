import React,{Component } from 'react';
import './PlayerDetail.css'
import TableComponent from '../../components/TableComponent';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Playing5Logo from "../../components/Images/playing5.png"
import ExtrasLogo from "../../components/Images/Extras.png"
import Button from '@mui/material/Button';


class PlayerDetail extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      team_a:{team_name: "",playing_5: [{1:"p1"},{2:"p2"},{3:"p3"},{4:"p4"},{5:"p5"}], extras: [{6:"p6"},{7:"p7"},{8:"p8"},{9:"p9"},{10:"p10"},{11: "p11"}]},
      team_b:{team_name: "",playing_5: [{1:"p1"},{2:"p2"},{3:"p3"},{4:"p4"},{5:"p5"}], extras: [{6:"p6"},{7:"p7"},{8:"p8"},{9:"p9"},{10:"p10"},{11: "p11"}]},
      edit: false,
      confirmButton: "Confirm",
      value: "1"
    }
    this.tap5 = React.createRef();
    this.tbp5 = React.createRef();
    this.taex = React.createRef();
    this.tbex = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(e,a){
    this.setState({value: a})
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
    this.setState({team_a: {team_name: "team_a",playing_5: taplaying5, extras: taextras}})
    console.log(taplaying5, taextras)
    var tbplaying5 = []
    var tbextras = []
    for(var j=1; j<=11;j++ ){
      if(j<=5){tbplaying5 = [...tbplaying5, {[tbp5State["pno"+ j]] : tbp5State["pname"+ j]}]}else{
        tbextras = [...tbextras, {[tbexState["pno"+ j]] : tbexState["pname"+ j]}]
      }
    }
    this.setState({team_b: {team_name: "team_b",playing_5: tbplaying5, extras: tbextras}})
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
    console.log(this.state)
    this.props.setPlayers({team_a: this.state.team_a}, {team_b: this.state.team_b})
  }


  render(){
    
    const edit = this.state.edit
    const confirmButton = this.state.confirmButton
    return (
      <div className='main-container-detail'>
        <Box className='box-container'>
          <TabContext value={this.state.value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList className='tabList-strip' onChange={this.handleChange} aria-label="lab API tabs example">
                <Tab style={{width:'100%'}} label="Team A" value="1" />
                <Tab style={{width:'100%',}} label="Team B" value="2" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <div className="team-detail">
                <img src={Playing5Logo} alt="logo" width="100%" height="100%"  style={{margin:'1rem'}}/>
                  {/* <Typography>Playing5Logo</Typography> */}
                  {/* <Typography>Playing 5</Typography> */}
                  <TableComponent ref={this.tap5} playerType={5} edit={edit}/>
                  {/* <Typography>Substitutes</Typography> */}
                  <img src={ExtrasLogo} alt="logo" width="100%" height="100%"  style={{margin:'1rem'}}/>
                  <TableComponent ref={this.taex} playerType={6} edit={edit} />
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="team-detail">
              <img src={Playing5Logo} alt="logo" width="100%" height="100%"  style={{margin:'1rem'}}/>
                <TableComponent ref={this.tbp5} playerType={5} edit={edit} />
                <img src={ExtrasLogo} alt="logo" width="100%" height="100%"  style={{margin:'1rem'}}/>
                <TableComponent ref={this.tbex} playerType={6}  edit={edit} />
              </div>
            </TabPanel>
          </TabContext>
        </Box>
        <div className='footer-container'>
          <Button onClick={()=>this.confirmHandler()} variant="contained">{confirmButton}</Button>
          <Link to="/Scoreboard" style={{ textDecoration: 'none' }}><Button variant='contained'>Start Match</Button></Link>
        </div>
      </div>
    )
  }

}

export default PlayerDetail