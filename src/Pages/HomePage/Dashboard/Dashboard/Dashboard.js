import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from './../../../../Hooks/useAuth';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { admin, user } = useAuth();

    const drawer = (
        <div>
            <Toolbar />

            <Link style={{ textDecoration: "none" }} to="/appointment"><Button color="inherit">Appointment</Button></Link>
            <Link style={{ textDecoration: "none" }} to="/dashboard"><Button color="inherit">Dashboard</Button></Link>

            {
                admin && <span>
                    <Button ><Link style={{ textDecoration: "none", backgroundColor: "yellow", color: "black" }} to={`/dashboard/makeAdmin`}>Make Admin</Link></Button>
                    <Link style={{ textDecoration: "none" }} color="inherit" to={`/dashboard/addDoctor`}><Button >Add Doctor</Button></Link>
                    <br />
                    <Link style={{ textDecoration: "none" }} color="inherit" to={`/dashboard/addStaff`}><Button >Add Staff</Button></Link>
                </span>
            }
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className="" sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>

                    <Typography variant="h6" noWrap component="div">
                        {admin ? <span className="text-warning">Admin</span> : <span className="text-info">Staff</span>} : {user.displayName}
                    </Typography>
                    <Typography sx={{
                        width: 750,
                        borderRadius: 1,
                        textAlign: 'end',
                    }} variant="h6" noWrap component="div">
                        <Link to="/" className="btn btn-info" > Back</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Toolbar />

                <Outlet />
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
