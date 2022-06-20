import React, { Component } from 'react'
import { Button,Grid,Card,CardContent } from '@mui/material'
import './MobileController.css'

const buttonArray = ["2","3","F","1","B","S"]

export default class MobileController extends Component {
  render() {
    return (
      <div className='main-container-Controller'>
        <Card id='teamA' className="team-card-controller" >
              <CardContent >
                    <Grid className='Player-list-controller' container spacing={5}>
                        <Grid className='inner-grid-controller' container item spacing={3}>
                            {
                                buttonArray.map((i)=>{
                                    return(
                                        
                                        <button className='scoreButtons-controller' variant='contained'>{i}</button>     
                                    )
                                })
                            }
                            <button className='EndButton-controller' variant='contained'>End Match</button>
                        </Grid>  
                    </Grid>
              </CardContent>
        </Card>
      </div>
    )
  }
}
