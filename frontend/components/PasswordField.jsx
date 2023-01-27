import React from 'react'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'

function PasswordField(props) {
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <TextField
        sx={props.sx}
        variant="outlined"
        label={'Password'}
        id={'password'}
        placeholder={'makeIT@G00d1'}
        helperText={
            'Must be at least 8 characters and, ' +
            'a mixture of the following:' +
            ' upper case letters, lower case letters,' +
            ' digits and symbols'
        }
        onChange={props.onChange}
        error={props.error}
        value={props.value}
        type={showPassword ? 'text' : 'password'}
        fullWidth={true}
        required={true}
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            )
        }}
    />
  )
}

export default PasswordField