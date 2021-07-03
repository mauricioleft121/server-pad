import { createConnection } from 'typeorm';


try {
  createConnection();
  console.log('Database connection established!');
}
catch (err) {
  console.error(err);
}