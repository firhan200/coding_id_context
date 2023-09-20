import { AppBar, Box, Button, Toolbar } from "@mui/material";
import CartData from "./CartData";
import ToggleTheme from "./ToggleTheme";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
    const { isLoggedIn, logout } = useAuth()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <CartData />
                    <ToggleTheme />

                    {
                        isLoggedIn ? <Button onClick={() => logout()} color="inherit">Logout</Button> : <Button color="inherit">Login</Button>
                    }
                    
                    
                </Toolbar>
            </AppBar>
        </Box >
    )
}