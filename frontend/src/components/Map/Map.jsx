import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from '../../mapStyles';
import useStyles from './styles';

const Map = ({ coords, setCoords, setBounds, setChildClicked, heroes }) => {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            Hi
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyDz2_3LrsE-Q6W2TSBUE7_ka2VzsTLwks8"
                }}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    setCoords({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {heroes.length && heroes.map((hero, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(48 + Math.random() * 0.1)}
                        lng={Number(-90 + Math.random() + 0.1)}
                        key={i}
                    >
                        {!matches
                            ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>{hero.firstName} {hero.lastName}</Typography>
                                    <img
                                        className={classes.pointer}
                                        src={hero.headshot_href}
                                    />
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>{hero.Team}</Typography>
                                </Paper>
                            )}
                    </div>
                ))}
                {/* {weatherData?.list?.length && weatherData.list.map((data, i) => (
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
                    </div>
                ))} */}
            </GoogleMapReact>
        </div>
    );
};

export default Map;