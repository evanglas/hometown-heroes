import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css'
// import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.jsx';

const PlaceDetails = ({ hero, selected, refProp }) => {
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const classes = useStyles();

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={hero.headshot_href}
                title={hero.firstName + ' ' + hero.lastName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{hero.firstName + ' ' + hero.lastName}</Typography>
                <Typography variant="body1" color="textSecondary">{hero.Team}</Typography>
                <Typography gutterBottom variant="body2" color="textSecondary">{'example.email@address.com'}</Typography>
                <Box display="flex" justifyContent="left">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className='mr-4' />
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </Box>
                {/* <Box display="flex" justifyContent="space-between" my={2}>
                    <Rating name="read-only" value={Number(place.rating)} readOnly />
                    <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
                </Box> */}
                {/* <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.price_level}
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.ranking}
                    </Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                        <img src={award.images.small} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
                {place.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon />{place.address}
                    </Typography>
                )}
                {place.phone && (
                    <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )} */}
            </CardContent>
            {/* <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                    Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                    Website
                </Button>
            </CardActions> */}
        </Card >
    );
};

export default PlaceDetails;