import React from "react"
import Search from '@mui/icons-material/Search'

const searchFieldStyles = {
    border: '1px solid black',
    margin: 'auto',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    height: '50%',
    backgroundColor: 'white'
}

const textFieldStyles = {
    border: 'none',
    width: '100%',
    outline: 'none',
    background: 'transparent'
}

const searchIconStyles = {
    color: 'black',
    paddingLeft: '0.25rem'
}

const SearchField = (props) => {
    return (
        <div style={searchFieldStyles}>
            <Search sx={searchIconStyles} />
            <input style={textFieldStyles} value={props.value} onChange={(e) => props.onChange(e.target.value)} placeholder='Search for recipes...' />
        </div>
    )
}

export default SearchField