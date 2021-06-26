require('dotenv').config(); 
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const Tour = require('./../../models/tourModel');

const DB = process.env.DATABASE;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful'));


const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'))
const importData = async() => {
  try {
    await Tour.create(tours);
    console.log('Data has been created successfully');
  } catch(err) {
    console.group(err);  
  }
  process.exit();
}

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Deleted successfully');
  } catch (err) {
    console.log(err);
  }
  process.exit();
}

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
