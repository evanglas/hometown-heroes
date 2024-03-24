import mongoose from 'mongoose';

const heroSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
})



export const Hero = mongoose.model('Hero', { name: String });