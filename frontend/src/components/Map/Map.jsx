import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from '../../mapStyles';
import useStyles from './styles';

const Map = ({ switchState, businesses, coords, setCoords, setBounds, setChildClicked, heroes }) => {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyDz2_3LrsE-Q6W2TSBUE7_ka2VzsTLwks8"
                }}
                defaultCenter={{ lat: 35, lng: 78 }}
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
                {(heroes.length && !switchState) && heroes.map((hero, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(hero.lat)}
                        lng={Number(hero.lng)}
                        key={i}
                    >
                        {!matches
                            ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2">{hero.firstName} {hero.lastName}</Typography>
                                    <img
                                        className={classes.pointer}
                                        src={hero.headshot_href}
                                    />
                                    {/* <Typography className={classes.typography} variant="subtitle2" gutterBottom>{hero.Team}</Typography> */}
                                </Paper>
                            )}
                    </div>
                ))}
                {(businesses.length && switchState) && businesses.map((b, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(b.lat)}
                        lng={Number(b.lng)}
                        key={i}
                    >
                        {!matches
                            ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2">{b.name}</Typography>
                                    <img
                                        className={classes.pointer}
                                        src={b.img_src}
                                    />
                                    {/* <Typography className={classes.typography} variant="subtitle2" gutterBottom>{hero.Team}</Typography> */}
                                </Paper>
                            )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;