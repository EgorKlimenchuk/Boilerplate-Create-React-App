import express from 'express';
import { resolve } from 'path';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema } from './schema/index.js';
import { root } from './root/index.js';

const server = express();
const __dirname = process.cwd();

const middleware = [
  express.static(resolve(__dirname, 'dist')),
  express.json(),
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  }),
];
middleware.forEach((it) => server.use(it));

server.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

const start = () => {
  try {
    server.listen(9000, () => console.log('Server started on PORT = 9000'));
  } catch (e) {
    console.log(e);
  }
};

start();
