import news from './model/news.js'
import { data } from "./constants/data.js"

const DefaultData= async ()=>{
    try{
        await news.deleteMany({})
        await news.insertMany(data);
        console.log('Data Imported Successfully')
    }catch(err){
        console.log('Error',err)
    }
}

export default DefaultData