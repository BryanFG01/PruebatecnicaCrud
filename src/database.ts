import mongoose from 'mongoose';



async function connect() {

    try{
        await mongoose.connect('mongodb://localhost/ts-app-prueba',{
           //useNewUrlParser: true 
        });
        console.log('>>> dabase connect')

    }catch{
        console.log('error')
    }
}
 export default connect 

