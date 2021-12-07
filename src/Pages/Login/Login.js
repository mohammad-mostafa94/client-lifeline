import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

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
            <Grid className="text-center" container spacing={2}>
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

                        <Button style={{ width: "90%", margin: "5px", backgroundColor: "yellow", color: "black" }} type="submit">Login</Button>

                        <Link style={{ textDecoration: "none" }} to="/register">
                            <Button className="mt-3 text-warning " variant="text">New User ? Please Click here(Register)</Button>
                        </Link>

                    </form>
                    {isLoading && <CircularProgress />}

                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img className="mw-100 mh-100" src="https://i.ibb.co/dQfB8jn/doctor-login.webp" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;