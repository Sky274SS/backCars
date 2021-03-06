const express = require('express');
const mongoose = require('mongoose');

const api = require('./api');
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use (express.urlencoded({extended: false}));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range, Referer, User-Agent, Origin');

    // if(req.method === 'OPTIONS')
    //     return res.send();

    next();
});
app.use(api);


async function start(){
    try {
        await mongoose.connect('mongodb+srv://skymirs:skymirs@free-and-high-quality.slm38.mongodb.net/apartment',{
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        app.listen(PORT, () => {
            console.log(`HTTP Server running on port ${PORT}`);
        });
    }catch (e) {
        console.error(e)
    }
}

start();