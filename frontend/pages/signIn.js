import React from "react"
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import PasswordField from "../components/PasswordField"

const inputStyles = {
    width: '90%',
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%'
}

const rootStyles = {
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%'
}

const buttonStyles = {
    width: '90%',
    margin: '5%'
}

const headerStyles = {
    paddingTop: '1rem',
    paddingLeft: '5%'
}

const SignIn = () => {
    const [pass, setPass] = React.useState('')
    const [username, setUsername] = React.useState('')
    const handleLogin = () => {
        console.log({pass, username})
    }
    return (
        <Paper sx={rootStyles}>
            <form>
                <Typography sx={headerStyles} variant='h3'>Sign In</Typography>
                <TextField
                    label='Username'
                    sx={inputStyles}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <PasswordField
                    sx={inputStyles}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <Button sx={buttonStyles} variant='contained' onClick={handleLogin}>
                    Login
                </Button>
            </form>
        </Paper>
    )
}

export default SignIn