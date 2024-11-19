import express from 'express';

const servicesRouter = express.Router();

servicesRouter.get('/', getAllServices);