import express from 'express';
import servicesRouter from './api/services';

const app = express();

const PORT = 5000;

app.listen(PORT, () => { console.log(`Server runing on port: ${PORT}`) });


app.use('/services', servicesRouter);

