import mongoose from "mongoose"


const Connection=(username,password)=>{
const URL=`mongodb+srv://${username}:${password}@cluster0.db5eq.mongodb.net/?retryWrites=true&w=majority`

    try {
        mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("Connected to Database Successfully...💕")
        
    } catch (error) {
        console.log(`Error while connecting to database  ${error}`);
        
    }
}
export default Connection

