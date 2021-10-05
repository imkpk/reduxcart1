require('dotenv').config()
const productData=require('./data/products')
const connectDb =require('./config/db')
const Product=require('./models/Product')
connectDb()

const importData=async()=>{
  try {
    await Product.deleteMany({});
    await Product.insertMany(productData);
    
    console.log('data imported succesfully');
    proess.exit()
  } catch (error) {
    console.error('error with data import');
    process.exit(1);
  }
}
importData()