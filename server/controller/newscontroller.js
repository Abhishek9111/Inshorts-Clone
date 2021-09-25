import news from "../model/news.js"


export const getNews= async (req,res)=>{
    try {
        const size = Number(req.query.size)
        const skip = Number(req.query.page) 
        let data = await news.find({}).limit(size).skip(size * skip)   //count =5 initial skip = 0

        //1st call 5*0  = 0
        //2nd call 5*1 = 5

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}