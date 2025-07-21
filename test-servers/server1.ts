import express from 'express';

const app = express();
const PORT = 4001;

app.get('/', (req, res) => {
  res.send(`Response from Server 1 (port ${PORT})`);
});

app.listen(PORT, () => {
  console.log(`Server 1 is running on http://localhost:${PORT}`);
});