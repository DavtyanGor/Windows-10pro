const express = require('express');
const exp = express();

const moon = require('moon')


exp.use('/styles', express.static('styles'))
// exp.use('/imgs', express.static('winWallpaper.webp'))

exp.get('/', function(req, res){
    res.sendFile('C:/Users/User/Desktop/win10-pro/win10pro.html')
})

// console.log(__filename = 'winWallpaper.webp')
exp.listen(3000, '127.0.0.1')
