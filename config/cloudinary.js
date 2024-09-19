const cloudinary = require('cloudinary').v2;
require('dotenv').config()

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET
});

module.exports = cloudinary;


// PORT = 4000
// DEV_DB_URL=mongodb://127.0.0.1:27017/placetracker
// CLOUD_NAME = dsnmwck8
// CLOUD_API_KEY = 61448379323377
// CLOUD_API_SECRET = ySSHk9KYddfHBJqT5MnspbxvQo
// JWT_SECRET = my-secret
// DB_URL=mongodb+srv://mailashutosh246:zmB4907wIVlKyj7p@cluster0.cw55m.mongodb.net/PLACETRACK?retryWrites=true&w=majority&appName=Cluster0