const mongoose = require('mongoose')
const DB = 'mongodb+srv://gaurav2612:gaurav2612@cluster0.412qv.mongodb.net/gauravsData?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection Successful")
}).catch((err)=>console.log('No connection'))

