const express = require('express');
const app = express();
require('dotenv/config')

const cors = require('cors');
const {default: mongoose}= require('mongoose');

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (req, res) => {
    return res.json("Hai threre");
})

const userRoute = require('./routes/auth');
app.use('/api/users/', userRoute);

//Artist routes Songs album
const artistRoute = require("./routes/artist")
app.use('/api/artists/', artistRoute)

const albumsRoute = require("./routes/albums")
app.use('/api/albums/', albumsRoute)

const songsRoute = require("./routes/songs")
app.use('/api/songs/', songsRoute)

mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true});
mongoose.connection
.once("open", () => console.log("DB connected"))
.on("error", (error) => console.log("${error}"))
app.listen(4000, () => console.log("Server on port 4000"));

