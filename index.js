//import express
import express from 'express';
//import mongoose
import mongoose from 'mongoose';
//import routes
import routes from './routes/index.js';
//import cors
import cors from 'cors';
// consruct express app
const app = express();

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/restful_db",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', ()=> console.log('Database connected'));

// middleware
app.use(cors());
app.use(express.json());
app.use('/products', routes);

// listen to port
app.listen(3000, ()=> console.log('Server running on port 3000'));