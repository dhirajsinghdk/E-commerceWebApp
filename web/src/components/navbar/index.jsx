import React from 'react';
import { AppBar, Avatar, Chip, Grid } from '@mui/material';
import SideDrawer from "./sideDrawer"
import {routesData} from "../../routes"

export default function NavBar(){
    return(
        <AppBar >
              <Grid 
                container 
                spacing={1} 
                style={{
                  padding:"1rem",
                  backgroundColor:"#333",
                }}
              >
                    <Grid item lg={2} style={{alignContent:"center"}}>
                        <SideDrawer routes={routesData}/>
                    </Grid>

                    <Grid item container lg={10} style={{display:"flex", justifyContent:"flex-end"}} spacing={1}>
                       <Grid item lg={2} xs={2}>
                            <Chip
                                avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                                label="Avatar"
                                variant="outlined"
                            />
                       </Grid>
                    </Grid>
              </Grid>
        </AppBar>
    )
}