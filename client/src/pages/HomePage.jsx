import Navbar from "../components/Navbar"
import Categories from "../components/Categories"
import Listings from "../components/Listings"
import Footer from "../components/Footer"
import Benefits from "../components/Benefits/Benefits"
import React from 'react'
import '../styles/Home.css'
import { Typography,  Button, Grid, Toolbar } from '@mui/material';

import { useSelector } from "react-redux"
import Team from "./Team"
import MainFooter from "../components/MainFooter"
const HomePage = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
    <div style={{marginBottom:"50px"}}>
    <Navbar />
    </div>
     
      <Toolbar/>
      <div className=" homePage " >
        <div className='overlay'>

          <Grid className='main_grid' container spacing={3} columns={16}>
            <Grid className='grid_left' xs={14} sm={7.4}>
              <Typography
                variant='h3'
              >
                <span className='h3_span'>Rent</span>
                Your Dream House With Us.
              </Typography>
              <Typography variant='h5'>
                Find Your Perfect Space, Rent with Ease. Discover, Rent, Relax.
              </Typography>

              <Typography
                variant='div'
                className='buttons'
                sx={{ marginLeft: 10 }}
              >
                <Button
                  variant='contained'
                  color='secondary'
                  className='home_btn'
                  sx={{ fontSize: 18 }}
                >
                  Explore
                </Button>
                <Button
                  variant='outlined'
                  sx={{ fontSize: 18, marginLeft: 10 }}
                  className='home_btn-2'
                  color='secondary'
                  >
                    Listings Property
                </Button>
               
              </Typography>
            </Grid>
            <Grid className='grid_right' xs={14} sm={8}>
              <div className='right_div'>
                {/* <Typography  variant='h3'>A</Typography> */}
              </div>
            </Grid>
          </Grid>


        </div>
        
      
      
      <Categories  />
      <Listings  />
      
      <Benefits/>

      <Team />
      
      
      <div style={{marginTop:"20px"}}>
      <Footer />
      </div>
      <div style={{marginTop:"20px"}}>
      <MainFooter />
      </div>

      </div>
    
    </>
  )
}

export default HomePage