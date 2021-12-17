import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "../Navbar/navcomp.module.css";
import {Button} from "@mui/material";

export default function AddStudent() {
    const [name, setName] = React.useState('Cat in the Hat');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-name"
                label="First Name"
                defaultValue=""
            />
            <TextField
                id="outlined-uncontrolled"
                label="Last Name"
                defaultValue=""
            />
            <TextField
                id="outlined-uncontrolled"
                label="Registration Number"
                defaultValue=""
            />
            <TextField
                id="outlined-uncontrolled"
                label="Password"
                defaultValue=""
            />
            <TextField
                id="outlined-uncontrolled"
                label="Email"
                defaultValue=""
            />
            <TextField
                id="outlined-uncontrolled"
                label="Contact Number"
                defaultValue=""
            />
            <></>

            <Button className={styles.button} size="large" >
                Submit
            </Button>
        </Box>
    );
}
