import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import BusinessDetails from '../BusinessDetails/BusinessDetails';
import useStyles from './styles.jsx';

const List = ({ switchState, businesses, childClicked, heroes, isLoading, type, setType, setRating, rating }) => {
    const [elRefs, setElRefs] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        setElRefs((refs) => Array(heroes.length).fill().map((_, i) => refs[i] || createRef()));
    }, [heroes]);

    return (
        <div className={classes.container}>
            <Typography variant="h4" gutterBottom>{switchState ? 'Businesses' : 'Local Athletes'}</Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                    {/* <FormControl className={classes.formControl}>
                        <InputLabel id="type">Type</InputLabel>
                        <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="rating">Rating</InputLabel>
                        <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="3">Above 3.0</MenuItem>
                            <MenuItem value="4">Above 4.0</MenuItem>
                            <MenuItem value="4.5">Above 4.5</MenuItem>
                        </Select>
                    </FormControl> */}
                    <Grid container spacing={3} className={classes.list}>
                        {!switchState && heroes?.map((hero, i) => (
                            <Grid ref={elRefs[i]} key={i} item xs={12}>
                                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} hero={hero} />
                            </Grid>
                        ))}
                        {switchState && businesses?.map((b, i) => (
                            <Grid ref={elRefs[i]} key={i} item xs={12}>
                                <BusinessDetails selected={Number(childClicked) === i} refProp={elRefs[i]} business={b} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    );
};

export default List;