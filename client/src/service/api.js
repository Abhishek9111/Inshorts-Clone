import axios from 'axios'

const URL = "http://localhost:4000"


export const getNews= async (page, size = 5)=>{
    try{
        return await axios.get(`${URL}/news?page=${page}&size=${size}`)
    }catch(err){
        console.log('Error observed',err)
    }
}