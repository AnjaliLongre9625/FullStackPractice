const mongoose = require("mongoose");
const {Schema}=mongoose;

main()
.then(() => console.log("connection successfull"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema=new Schema({
    item:String,
    price:Number,
});

const customerSchema=new Schema({
    name:String,
    orders:[
        {
            
        }
    ]
})

const Order=mongoose.model("Order",orderSchema);

// const addOrders=async () => {
//     let res=await Order.insertMany([
//         {item:"Samose",price:12},
//         {item:"Chips",price