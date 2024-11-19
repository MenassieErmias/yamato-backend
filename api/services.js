import express from 'express';

import { createService, editService } from '../controller/services.js';

const servicesRouter = express.Router();

servicesRouter.get('/', getAllServices);
servicesRouter.put('/:id', editService);
