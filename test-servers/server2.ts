import express from 'express';

const app = express();
const PORT = 4002;

app.get('/', (req, res) => {
  res.send(`Response from Server 2 (port ${PORT})`);
});

app.listen(PORT, () => {
  console.log(`Server 2 is running on http://localhost:${PORT}`);
});