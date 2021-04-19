import express from 'express';
import bodyParser from 'body-parser';
import serverConfig from './config';

const app = express();
app.use(bodyParser.json());

app.listen(serverConfig.port, () => console.log('Server is listening on port:', serverConfig.port));
