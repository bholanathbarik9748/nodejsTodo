const express = require('express');
const mongoose  = require('mongoose');
const route = require('./routes/UserRoutes');
const path = require('path');

const app = express();

// SET PORT
const PORT = 4444;

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Connect to Db
const DBUrl = "mongodb+srv://bholanathbarik9748:HzU0FMpCdMcyjm2a@cluster0.1nctite.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => app.listen(PORT, (req, res) => { console.log(`Server Start PORT http://localhost:${PORT}/`); }))
    .catch((err) => console.log(err))

app.use(route);