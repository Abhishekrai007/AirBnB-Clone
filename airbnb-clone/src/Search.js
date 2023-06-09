import React, { useState } from 'react'
import "./Search.css"
import { DateRangePicker } from 'react-date-range';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { People } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Search = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const goToSearch = () => {
        navigate("/search")
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }
    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>Number of guests <People /> </h2>
            <input type="number" min={0} defaultValue={2} />
            <Button onClick={goToSearch} >Search Airbnb</Button>
        </div>
    )
}

export default Search 