import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './../CSSFiles/Saved.css'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Header from '../Components/header'

import chicken from "./../Images/Italian-Chicken-and-Rice-2.jpg";

const Saved = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    return (

        <div class="fullPage">
            <Header />

            <div className="paramBox">
                <div className='topTitle'>
                    <h1>Saved Recipes</h1>
                </div>


                <div className='filters'>

                    <div className='SearchBar'>
                        <TextField

                            sx={{
                                borderRadius: 1,
                                border: 1,
                                bgcolor: "antiquewhite",
                                width: 0.80

                            }}
                            margin='dense'
                            label="Keyword Search"
                            placeholder='Enter keywords'
                        />
                    </div>

                    <FormControl
                        sx={{
                            marginBlock: 0.5,
                            width: 0.15,
                            marginLeft: 65,
                            display: "flex",
                            justifyContent: "end",

                        }}
                    >
                        <InputLabel>Sort By</InputLabel>
                        <Select
                            defaultValue="Expiring Ingredients"
                            sx={{
                                borderRadius: 1,
                                border: 1,
                                width: 1,
                                bgcolor: "antiquewhite",
                                justifySelf: "end",


                            }}



                        >
                            <MenuItem value="Most Ingredients Matched">Most Ingredients Matched</MenuItem>
                            <MenuItem value="Lowest Cook Time">Lowest Cook Time</MenuItem>
                            <MenuItem value="Expiring Ingredients">Most Expiring Ingredients</MenuItem>
                            <MenuItem value="Lowest Calories">Lowest Calories</MenuItem>
                            <MenuItem value="Least Ingredients">Least Ingredients</MenuItem>
                        </Select>
                    </FormControl>
                </div>

            </div>

            <div className='results'>

                <div className='FullresultCardSaved'>
                    <div className='imageSaved'>
                        <img src={chicken} width="100" height="100" className='image' />
                    </div>


                    <div className='titleFaxSaved'>
                        <div className='titleSaved'>
                            <h1>One Pot Italian Tomato Chicken and Rice</h1>
                        </div>

                        <div className='faxSaved'>
                            <div className='faxCellSaved'>
                                45 min to prepare
                            </div>
                            <div className='faxCellSaved'>
                                650 cal per Serving
                            </div>
                            <div className='faxCellSaved'>
                                6/8 Ingredients
                            </div>
                        </div>


                    </div>

                    <div className='buttonsSaved'>
                        <Button variant='contained'
                            sx={{
                                borderRadius: 1,
                                border: 1,
                                width: 1,
                                bgcolor: "green",
                                color: 'black',
                                margin: 0.5,
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                            onClick={() => {
                                navigate("/view");
                            }}> View Recipe</Button>

                        <Button variant='contained'
                            sx={{
                                borderRadius: 1,
                                color: 'black',
                                border: 1,
                                width: 1,
                                bgcolor: "#DF950A",
                                margin: 0.5,
                            }}
                            onClick={() => {
                                navigate("/editview");
                            }}
                        > Edit Recipe</Button>

                        <Button variant='contained'
                            sx={{
                                borderRadius: 1,
                                color: 'black',
                                border: 1,
                                width: 1,
                                bgcolor: "#E84613",
                                margin: 0.5,
                            }}> Delete Recipe</Button>
                    </div>

                </div>
            </div>


        </div>
    )
}




export default Saved