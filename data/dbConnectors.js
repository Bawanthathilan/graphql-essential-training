import mongoose from "mongoose";

async function connectMongo(){
    try {
        await mongoose.connect('mongodb://localhost/graphql')
        console.log('connected to MongoDB')
    } catch (error) {
        console.log('Error connecting to mongo', error)
    }
}

connectMongo();

const widgetSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    soldout:String,
    inventory:String,
    stores:Array
})

const Widgets = mongoose.model('widgets', widgetSchema);

export {Widgets};