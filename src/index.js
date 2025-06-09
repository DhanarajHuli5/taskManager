import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './db/index.db.js';



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




