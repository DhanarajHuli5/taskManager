import app from './app';
import dotenv from 'dotenv';
import connectDB from './db/index.db';



dotenv.config({ path: './.env' });
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);  
    })
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })




