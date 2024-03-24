import React from 'react';
import { Button, TextField, Grid, Paper } from '@material-ui/core';
import Header from '../components/Header/Header';

const RegisterHero = ({ }) => {
    return (
        <div>
            <Header onPlaceChanged={null} onLoad={null} switchState={null} setSwitchState={null} /><div className="m-5">
                <Grid container justify="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <Paper style={{ padding: 16 }}>
                            <form noValidate autoComplete="off">
                                <TextField fullWidth margin="normal" label="Name" variant="outlined" />
                                <TextField fullWidth margin="normal" label="Hometown" variant="outlined" />
                                <TextField fullWidth margin="normal" label="Instagram Link" variant="outlined" />
                                <TextField fullWidth margin="normal" label="Twitter Link" variant="outlined" />
                                <TextField fullWidth margin="normal" label="Photo URL" variant="outlined" />
                                <TextField fullWidth margin="normal" label="College Team" variant="outlined" />
                                <Button variant="contained" color="primary" type="submit">
                                    Register
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default RegisterHero;