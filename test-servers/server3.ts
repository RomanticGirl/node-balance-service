import express from 'express';

const app = express();
const PORT = 4003;

app.get('/', (req, res) => {
  res.send(`Response from Server 3 (port ${PORT})`);
});

app.listen(PORT, () => {
  console.log(`Server 3 is running on http://localhost:${PORT}`);
});