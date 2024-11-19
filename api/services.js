import express from 'express';

import { getAllServices, createService, editService, deleteService } from '../controller/services.js';

const servicesRouter = express.Router();

servicesRouter.get('/', getAllServices);

servicesRouter.post('/', createService);

servicesRouter.put('/:id', editService);

servicesRouter.delete('/:id', deleteService);
