const express = require('express');
const app = express();
// const port = 5000;
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose');
const postModel = require('./schema')
var cors = require('cors')

app.use(cors(["localhost:5000", "localhost:3000"]))
app.use(express.json())

const db_uri = "mongodb+srv://admin:admin@cluster0.gux0y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(db_uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.get('/add',(request,response)=>{
    postModel.create(
        {name:"Qambar Ali",email:"qambar@gmail.com",password:"qambar12",number:'03123456789'},
        (error,data)=>{
            if(error){
                console.log(error.message);
            }
            else{
                console.log(data);
                response.send(`Data Added Successfully`)
            }
        })
})

app.get('/find',(request,response)=>{
    postModel.findOne(
        {email:"ali@gmail.com"},
        (error,data)=>{
            if(error){
                console.log(error.message);
            }
            else{
                console.log(data);
                response.send(`Data Found`)
            }
        })
})


app.get('/',(req,res)=>{
    res.send('Hello Express')
})

mongoose.connection.on('connected',()=>console.log(`Database connected`))
mongoose.connection.on('error',(error)=>console.log(`Mongoose Error ${error.message}`))

app.listen(port,()=>{
    console.log(`App running at localhost:${port}`)
})