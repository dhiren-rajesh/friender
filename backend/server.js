import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

import Cards from './dbCards.js'

//App Config
const app = express();
const port = process.env.PORT || 5000;
const connection_url = `mongodb+srv://admin:elliot107@cluster0.l2ung.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//API Endpoints
app.get("/", (req,res) => res.status(200).send("Hope it works!"))

app.post("/friendster/cards", (req,res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get("/friendster/cards", (req, res) => {
    Cards.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`Listening on port: ${port}`));