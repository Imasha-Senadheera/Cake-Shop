const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://Ima:Ima123@cluster0.rkrfu.mongodb.net/cake_shop?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });
