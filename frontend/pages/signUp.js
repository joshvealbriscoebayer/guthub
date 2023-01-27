import React from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PasswordField from '../components/PasswordField';
import Typography from '@mui/material/Typography';

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

const SignUp = () => {
    const [email, setEmail] = React.useState('')
    const [validateEmail, setValidateEmail] = React.useState(false)
    const [pass, setPass] = React.useState('')
    const [validatePass, setValidatePass] = React.useState(false)
    const [username, setUsername] = React.useState('')
    const handleEmailChange = (event) => {
        setValidateEmail(true)
        setEmail(event.target.value)
    }
    const handlePassChange = (event) => {
        setValidatePass(true)
        setPass(event.target.value)
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value.toLowerCase())
    }
    const isValidEmail = () => {
        if (!validateEmail) return true
        return /\S+@\S+\.\S+/.test(email)
    }
    const isValidPass = () => {
        if (!validatePass) return true
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/.test(pass)
    }
    const completeSignUp = () => {
        console.log({username, email, pass})
    }
    return (
        <Paper sx={rootStyles}>
            <Typography sx={headerStyles} variant='h3'>Sign Up</Typography>
            <form>
                <TextField
                    sx={inputStyles}
                    label='Email Address'
                    id='email-address'
                    error={!isValidEmail()}
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    sx={inputStyles}
                    label='Username'
                    id='username'
                    value={username}
                    onChange={handleUsernameChange}
                />
                <PasswordField
                    sx={inputStyles}
                    error={!isValidPass()} 
                    value={pass}
                    onChange={handlePassChange}
                />
                <Button
                    sx={buttonStyles}
                    variant='contained'
                    onClick={completeSignUp}
                    disabled={!isValidPass() || !isValidEmail()}
                >
                    Sign Up
                </Button>
            </form>
        </Paper>
    )
}

export default SignUp