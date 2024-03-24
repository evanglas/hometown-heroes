import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box, Switch, FormControlLabel } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

import useStyles from './styles.jsx';

const Header = ({ onPlaceChanged, onLoad, switchState, setSwitchState }) => {
    const classes = useStyles();
    const handleChange = (event) => {
        setSwitchState(!switchState);
        console.log(switchState);
    };
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Link to='/'>
                    <Typography variant="h5" className={classes.title}>
                        Hometown Heroes
                    </Typography>
                </Link>
                <Link to='/register-hero'>
                    <Typography variant="h6" className={classes.title}>
                        Register
                    </Typography>
                </Link>
                <Box display="flex" alignItems="center">
                    <FormControlLabel
                        control={
                            <Switch
                                // checked={true}
                                onChange={handleChange}
                                name="checkedA"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        }
                        label="Businesses"
                    />
                </Box>

                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        {switchState ? 'Search for Businesses' : 'Search for Athletes'}
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;