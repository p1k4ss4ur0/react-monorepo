import {Router} from 'express';
import path from 'path';
import fs from 'fs';

import {main} from '@utils/constants';
import uuidv4 from '@utils/uuidv4';

const routes = Router();

routes.get('/', async (req, res) => {
  return res.send('Hello, world!');
});

routes.post('/write-file-sync', async (req, res) => {
  const {file} = req.body;

  // const name = uuidv4();

  fs.writeFileSync(path.resolve(main, file.path), JSON.stringify(file));

  return res.status(200).send(true);
});

routes.post('/read-dir-sync', async (req, res) => {
  const {dir} = req.body;

  const files = fs.readdirSync(path.resolve(main, dir)).map(file => {
    return JSON.parse(
      fs.readFileSync(path.resolve(main, dir, file)).toString(),
    );
  });

  return res.status(200).send(files);
});

routes.post('/rm-sync', async (req, res) => {
  const {file} = req.body;

  fs.rmSync(path.resolve(main, file));

  return res.status(200).send(true);
});

export default routes;
