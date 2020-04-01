import express from 'express';
import cors from 'cors';
import routes from './routes';
import database from './database';

class App {
  constructor() {
    this.server = express();

    this.cors();
    this.database();
    this.middlewares();
    this.routes();
  }

  cors() {
    this.server.use(cors());
  }

  database() {
    database.mongo();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
