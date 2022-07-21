import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PlayerSwitch(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const players = ["player6","player7","player8","player9","player10","player11"];
  // const [players, setPlayers] = useState(["player6","player7","player8","player9","player10","player11"]);

  return (
    <div>
      
      <Button onClick={handleOpen}><ChangeCircleIcon/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* loop over array players */}
          {
            players.map(i=>{
              return <Button>{i}<br/></Button>
          })
        }
        <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
