import React from 'react';
import { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
// import { getPlacesData, getWeatherData } from './api/travelAdvisorAPI';
import Header from '../components/Header/Header';
import List from '../components/List/List';
import Map from '../components/Map/Map';

import data from '../assets/heroesDataset.json';

const Home = () => {
    const [heroes, setHeroes] = useState(data.splice(0, 10));
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setLoading(true);
    //     axios.get('http://localhost:3000/heroes').then((response) => {
    //         setHeroes(response.data.data);
    //         setLoading(false);
    //     }).catch((error) => {
    //         console.error(error);
    //         setLoading(false);
    //     });
    // }, []);
    // return (
    //     <div>
    //         {loading ? (
    //             <Spinner />
    //         ) : (
    //             <div>
    //                 <h1 className='text-3xl font-bold text-center'>Heroes</h1>
    //                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
    //                     {heroes.map((hero, index) => (
    //                         <div key={hero._id} className='bg-white shadow-lg rounded-lg overflow-hidden'>
    //                             <img src={hero.image} alt={hero.name} className='w-full h-64 object-cover object-center' />
    //                             <div className='p-4'>
    //                                 <h1 className='text-2xl font-bold'>{hero.name}</h1>
    //                                 <p className='text-gray-600'>{hero.description}</p>
    //                                 <Link to={`/heroes/${hero.id}`} className='block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 text-center'>View Hero</Link>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    //         )}
    //     </div>
    // )

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

    return (
        <>
            <CssBaseline />
            <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List heroes={heroes} isLoading={isLoading} childClicked={childClicked} setType={setType} setRating={setRating} type={type} rating={rating} />
                </Grid>
                <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Map
                        setChildClicked={setChildClicked}
                        setCoords={setCoords}
                        setBounds={setBounds}
                        coords={coords}
                        heroes={heroes}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Home;

