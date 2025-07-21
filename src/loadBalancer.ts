import express from 'express';
import proxy from 'express-http-proxy';
import { RoundRobinBalancer } from './balancer/roundRobinBalancer';
import { Server } from './balancer';

// Список целевых серверов (backends)
const BACKEND_SERVERS: Server[] = [
    { id: 's1', url: 'http://localhost:4001' },
    { id: 's2', url: 'http://localhost:4002' },
    { id: 's3', url: 'http://localhost:4003' },
];

const balancer = new RoundRobinBalancer(BACKEND_SERVERS);

export const loadBalancer = express.Router();

loadBalancer.use('/', (req, res, next) => {
    const target = balancer.getNextServer();

    if (!target) {
        res.status(503).send('No available backend servers');
        return;
    }

    // Проксируем запрос на целевой сервер
    proxy(target.url)(req, res, next);
});