import express from 'express';
import { readdirSync } from 'fs';
import cors from 'cors';
const morgan = require('morgan');
require('dotenv').config();

const app = express();

//set view engine 
app.set('view engine', 'ejs');

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); //parse url data of type encoded
app.use(express.json());

//serve static files to public
app.use(express.static(__dirname + '/public'));

//route middleware
//get each 'route' file and apply as middleware
readdirSync('./routes').map((r) => {
	app.use('/api', require(`./routes/${r}`)) //r is filename
});

// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.post("/login", (req, res) => {
// 	const { email, password } = req.body;
// });


//access .env variables
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));