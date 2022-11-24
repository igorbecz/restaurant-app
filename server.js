const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB_URL = process.env.DATABASE_URL.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
).replace('<LOGIN>', process.env.DATABASE_LOGIN);

console.log(DB_URL);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.log(`DB connection failed: ${err}`);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
