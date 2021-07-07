const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Project2',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successful")
}).catch((error)=>{
    console.log("Error While Connecting!")
})
