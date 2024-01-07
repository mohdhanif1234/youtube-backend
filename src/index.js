// require('dotenv').config({path:'./env'}) not a good approach
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import app from './app.js';

dotenv.config({ path: './env' })

let port = process.env.PORT || 8000

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
        app.on('error',(error)=>{
            console.log(`Some error occured: ${error}`)
        })
    })
    .catch((error) => {
        console.log(`MONGO DB connnection failed!!! : ${error}`)
    })

/*(async () => { // first approach to connect with DB
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })

        app.on('error', (error) => {
            console.log('App not able to talk to DB')
        });
        throw error;


    } catch (error) {
        console.error(`ERROR: ${error}`)
        throw error;
    }
})()*/