import { Button, Grid, TextField } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState('')

    const { login } = useAuth()

    const callBackendAPIforLogin = () => {
        return {
            token: "jwttokennya",
            name: "John Doe",
            role: "Customer"
        }
    }

    const submit = e => {
        e.preventDefault();

        const payload = callBackendAPIforLogin()

        login(payload);
    }

    return (
        <form onSubmit={submit}>
            <Grid>
                <TextField value={email} onChange={e => setEmail(e.target.value)} label="Email" variant="outlined" placeholder="Email" required />
                <TextField label="Password" variant="outlined" placeholder="Password" type="password" required />
                <Button type="submit" variant="outlined">Login</Button>
            </Grid>
        </form>
    )
}