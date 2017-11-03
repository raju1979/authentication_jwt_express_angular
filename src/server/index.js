const express = require("express");
const app = express();

const path = require('path');

const dotenv = require('dotenv');
dotenv.load();

const cors = require('cors');
app.use(cors());

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_CONF,{
    useMongoClient:true
})

const db = mongoose.connection;

db.on("error",console.error.bind(console,"Mongodb connection error"));
db.once('open',() => {
    console.log('connected');
    app.listen(app.get('port'),function(){
        console.log(`App running :: ${process.env.PORT_NO}`)
    })
    
})

const bodyParser = require("body-parser");
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(bodyParser({limit: '5mb'}));

app.use(express.static(path.join(__dirname,"./public")));


const addDataRoute = require("./routes/r_adddata");
app.use('/adddata',addDataRoute);

const usersRoute = require("./routes/r_users");
app.use("/user",usersRoute);


app.set('port', (process.env.PORT || 5000));

app.get("/",(req,res) => {

})

