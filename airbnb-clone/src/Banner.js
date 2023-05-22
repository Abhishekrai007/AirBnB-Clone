import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./Banner.css"
import { Button } from '@mui/material'
import Search from './Search'
const Banner = () => {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const goToSearch = () => {
        navigate("/search")
    }
    return (
        <div className='banner' >
            <div className="banner__search">
                {showSearch && <Search />}
                <Button onClick={() => { setShowSearch(!showSearch) }} className='banner__searchButton' variant='outlined' > {showSearch ? "Hide" : "Search Dates"} </Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button
                    onClick={goToSearch}
                    variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner

