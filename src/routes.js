import { Router } from 'express';
import User from './app/models/User';
import { password } from './config/database';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'davi',
    email: 'flamego@gmial.com',
    password_hash: 'asdasd134',
  });
  await res.json(user);
});

export default routes;
