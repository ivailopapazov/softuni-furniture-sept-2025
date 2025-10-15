import { Router } from 'express';
import furnitureService from '../services/furnitureService.js';

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {
    const furnitures = await furnitureService.getAll();

    res.json(furnitures ?? []);
});

furnitureController.get('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;

    const furniture = await furnitureService.getOne(furnitureId);

    res.json(furniture);
});

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;
    const owerId = req.user.id;

    const furniture = await furnitureService.create(furnitureData, owerId);

    res.status(201).json(furniture);
});

export default furnitureController;

