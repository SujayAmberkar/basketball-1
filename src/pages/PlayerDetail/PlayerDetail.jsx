import { Typography } from '@mui/material'
import React,{useState} from 'react';
import './PlayerDetail.css'
import TableComponent from '../../components/TableComponent';
import { Link } from 'react-router-dom';

function PlayerDetail() {
  const [confirmButton, setConfirmButton] = useState('Confirm')
  const [edit, setEdit] = useState(false);
  
  const confirmHandler = ()=>{
    if(confirmButton==='Confirm'){
      setConfirmButton("Edit") 
      setEdit(true)
    }else{
      setConfirmButton('Confirm')
      setEdit(false)
    }
    
  }

  const playing = 5;
  const substitute = 6;
  return (
    <div className='main-container'>
      <div className="team">
        <Typography>Team A</Typography>
        <Typography>Playing 5</Typography>
        <TableComponent playerType={playing} edit={edit}/>
        <Typography>Substitutes</Typography>
        <TableComponent playerType={substitute} edit={edit} />
        <button onClick={confirmHandler}>{confirmButton}</button>
      </div>

      <div className="team">
        <Typography>Team B</Typography>
        <Typography>Playing 5</Typography>
        <TableComponent playerType={playing} edit={edit} />
        <Typography>Substitutes</Typography>
        <TableComponent playerType={substitute}  edit={edit} />
        <Link to="/Scoreboard"><button>Start Match</button></Link>
      </div>
    </div>
  )
}

export default PlayerDetail