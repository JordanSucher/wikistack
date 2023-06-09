const express = require('express')
const morgan = require('morgan')
const app = express();
const views = require('./views')
const { db } = require('./models');

// logging to console 
app.use(morgan('dev'));

// serving static files
app.use(express.static('./public'));

// parsing the body of a request
// app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(
        views.main("")
    );
})

db.authenticate() 
  .then(() => { 
    console.log('connected to the database'); 
})



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
