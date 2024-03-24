/* eslint-disable consistent-return */
import axios from 'axios';

import data from '../assets/full_player_locs.json';

export const getHeroesData = async (type, sw, ne) => {
    const filteredHeroes = data.filter(hero => {
        return hero.lat >= sw.lat && hero.lat <= ne.lat && hero.lng >= sw.lng && hero.lng <= ne.lng;
    });

    return filteredHeroes.slice(0, 10);
};