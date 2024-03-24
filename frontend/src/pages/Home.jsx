import React from 'react';
import { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { getHeroesData } from '../api/herosAPI';
import Header from '../components/Header/Header';
import List from '../components/List/List';
import Map from '../components/Map/Map';

import data from '../assets/full_player_locs.json';
import businesses from '../assets/businesses.json';

const Home = () => {
    const [heroes, setHeroes] = useState(data.splice(0, 10));
    const [loading, setLoading] = useState(true);

    const [switchState, setSwitchState] = useState(false);


    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState(null);

    const [weatherData, setWeatherData] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [places, setPlaces] = useState([]);

    const [autocomplete, setAutocomplete] = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoords({ lat: latitude, lng: longitude });
        });
        setIsLoading(false);
        console.log('notLoading');
    }, []);

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        console.log(lat)
        setCoords({ lat, lng });
    };

    useEffect(() => {
        if (bounds) {
            setIsLoading(true);

            try {
                getHeroesData(type, bounds.sw, bounds.ne)
                    .then((data) => {
                        setHeroes(data);
                        setFilteredPlaces([]);
                        setRating('');
                        setIsLoading(false);
                        console.log(data.length)
                    });
            } catch (error) {
                console.error(error);
            }

        }
    }, [bounds, type]);

    return (
        <>
            <CssBaseline />
            <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} switchState={switchState} setSwitchState={setSwitchState} />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List businesses={businesses} switchState={switchState} heroes={heroes} isLoading={isLoading} childClicked={childClicked} setType={setType} setRating={setRating} type={type} rating={rating} />
                </Grid>
                <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Map
                        setChildClicked={setChildClicked}
                        setCoords={setCoords}
                        setBounds={setBounds}
                        coords={coords}
                        heroes={heroes}
                        businesses={businesses}
                        switchState={switchState}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Home;

