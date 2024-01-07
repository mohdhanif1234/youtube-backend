// require('dotenv').config({path:'./env'}) not a good approach
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({ path: './env' })

connectDB()

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