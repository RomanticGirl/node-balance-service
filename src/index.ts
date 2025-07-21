import express from 'express';
import { loadBalancer } from './loadBalancer';

const app = express();
const PORT = 3000;

app.use('/', loadBalancer);

app.listen(PORT, () => {
  console.log(`Load balancer is running on http://localhost:${PORT}`);
});