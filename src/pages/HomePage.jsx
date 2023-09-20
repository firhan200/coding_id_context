import { useState } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import { CartProvider } from "../contexts/CartContext";
import useTheme from "../hooks/useTheme";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import LoginForm from "../components/LoginForm";
import useAuth from "../hooks/useAuth";

export default function HomePage() {
    const { currentTheme } = useTheme()
    const { isLoggedIn, payload } = useAuth()

    const mainTheme = createTheme({
        palette: {
            mode: currentTheme,
        },
    });

    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <CartProvider>
                <Header />
                <Container>
                    { 
                    !isLoggedIn ?<LoginForm /> : `Hello, ${payload.role}`
                    }
                    
                </Container>
            </CartProvider>
        </ThemeProvider>
    )
}