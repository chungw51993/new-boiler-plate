import app from './app.js';

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});