import express from 'express';
import parser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import 'dotenv/config';

import routes from '@routes';

const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use(cors());

app.use(routes);

app.listen(3001, () => console.log('🌈'));
