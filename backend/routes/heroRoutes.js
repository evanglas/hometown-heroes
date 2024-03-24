import express from 'express';
import { Hero } from '../models/hero.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if (!req.body.name) {
            return res.status(400).send({
                message: 'Send name',
            });
        }
        const newHero = {
            name: req.body.name,
        };
        const hero = await Hero.create(newHero);

        return res.status(201).send(hero);

    } catch (err) {
        console.log(err);
        res.status(500).send({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const heroes = await Hero.find({});
        return res.status(200).json({
            count: heroes.length,
            data: heroes
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const hero = await Hero.findById(id);
        return res.status(200).json(hero);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const hero = await Hero.findByIdAndUpdate(id, req.body);

        if (!hero) {
            return res.status(404).send({
                message: 'Hero not found',
            });
        }

        return res.status(200).send({ message: 'Hero updated' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const hero = await Hero.findByIdAndDelete(id);

        if (!hero) {
            return res.status(404).send({
                message: 'Hero not found',
            });
        }

        return res.status(200).send({ message: 'Hero deleted' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

export default router;