import mongoose from 'mongoose';



async function connect() {

    try{
        await mongoose.connect("mongodb://localhost:27017/pueba_tecnica", {
          //useNewUrlParser: true
        });
        console.log('>>> dabase connect')

    }catch{
        console.log('error')
    }
}
 export default connect 

