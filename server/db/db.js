const mongoose = require('mongoose');
const mongourl = process.env.MONGODB_URL || "mongodb+srv://ancy2607:ancyaswin@cluster0.zmibsrh.mongodb.net/?retryWrites=true&w=majority" ;
const dbname = process.env.DB_NAME || "Details";


mongoose.connect(mongourl, { dbName: dbname })
.then(()=>{
    console.log(`Connected to MongoDB ${mongourl}`)
})
.catch(err => console.log(err))
