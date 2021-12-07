import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import login from '../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { signInUser, isLoading, authError } = useAuth();

    const location = useLocation()
    const navigate = useNavigate();

    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmitLogin = e => {
        signInUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 8, mb: 5 }} variant="h5" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmitLogin} >
                        <TextField
                            sx={{ my: 1 }}
                            id="standard-basic"
                            label="Your email"
                            variant="standard"
                            style={{ width: "90%" }}
                            name="email"
                            type="email"
                            onBlur={handleChange}
                        />
                        <TextField
                            id="standard-basic"
                            label="Your Password"
                            variant="standard"
                            type="password"
                            sx={{ width: "90%", mt: 4 }}
                            name="password"
                            onBlur={handleChange}
                        />

                        <Button style={{ width: "90%" }} type="submit" variant="contained">Login</Button>

                        <Link style={{ textDecoration: "none" }} to="/register">

                            <Button className="mt-3" variant="text">New User ? Please Register</Button>
                        </Link>

                    </form>
                    {isLoading && <CircularProgress />}

                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img className="mw-100 mh-100" src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;