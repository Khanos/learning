import dotenv from "dotenv";
import express, { Request, Response} from "express";
import cors from "cors";
import bodyParser from 'body-parser';

import indexRoutes from './routes';
import dbInit from './configs/mongo';

export default class server {
    public app: express.Application;
    private port: number;
    private host: string;
    private apiVersion: string;

    constructor(){
        dotenv.config();
        this.port = Number(process.env.PORT ?? 3001);
        this.host = String(process.env.HOST ?? 'localhost');
        this.apiVersion = String(process.env.API_VERSION ?? 'v1');

        this.app = express();
        this.config();
        this.route();
    }

    config(){
        console.log('Config...')
        // Set configs
        this.app.set('port', this.port);
        this.app.set('host', this.host);

        // Use configs
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    route(){
        console.log('Route...');
        this.app.use(`/api/${this.apiVersion}/`, indexRoutes);
        this.app.use('/', (req: Request, res: Response) => {
            res.send('Hello from Express');
        });
        this.app.use('*', (req: Request, res: Response) => {
            res.redirect('/');
        })
    }

    start(){
        console.log('Start..');
        const options = {
            port: this.port,
            host: this.host
        }
        dbInit();
        this.app.listen(options, ()=> {
            console.log(`Listening on http://${this.host}:${this.port}`);
        });
    }
}
