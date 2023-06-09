const express = require('express')
const morgan = require('morgan')
const app = express();
const views = require('./views')
const { db } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

// logging to console 
app.use(morgan('dev'));

// serving static files
app.use(express.static('./public'));

// parsing the body of a request
// app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/wiki', wikiRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.redirect('/wiki');
})

db.authenticate() 
  .then(() => { 
    console.log('connected to the database'); 
})

const init = async ()=> {
  await db.sync({force: true});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
}
init();