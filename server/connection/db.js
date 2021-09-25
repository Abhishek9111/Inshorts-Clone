import  mongoose  from "mongoose";

const Connection = async()=>{
    try{
        // const password = `abhi123`
    const URL = `mongodb://Abhi:abhi123@inshorts-app-shard-00-00.cflyy.mongodb.net:27017,inshorts-app-shard-00-01.cflyy.mongodb.net:27017,inshorts-app-shard-00-02.cflyy.mongodb.net:27017/INSHORTS-CLONE?ssl=true&replicaSet=atlas-11os5s-shard-0&authSource=admin&retryWrites=true&w=majority`
    await mongoose.connect(URL,{useNewUrlParser: true})
    console.log('DataBase Connected Successfully')
    }catch(err){
        console.log("Error connecting",err)
    }
}


export default Connection;