require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


//routes
const FinancialRoute = require('./routes/financial_routes');
const JobHireRoute = require('./routes/jobHire_routes')
const JobFindRoute = require('./routes/jobFind_routes');



const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// mongoose.connect('mongodb+srv://isuru:1234@mernbookstore.a7dhtbg.mongodb.net/No_Poverty?retryWrites=true&w=majority', { useNewUrlParser: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));



// // app.use(errorHandler);


app.use('/financial', FinancialRoute);
app.use('/jobHire', JobHireRoute);
app.use('/jobFind', JobFindRoute);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 