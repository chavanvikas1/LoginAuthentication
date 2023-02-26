const mongoose=require('mongoose')

const db=async()=>{
    try {
        
       await  mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected');
    } catch (error) {
        console.log(error);
        console.log('not connected');
        process.exit()
        
    }
}
module.exports=db;