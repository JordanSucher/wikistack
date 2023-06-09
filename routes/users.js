const express = require('express');
const router = express.Router();
const views = require('../views');

router.get('/', (req, res, next) => {
    res.send('got to GET /users/');
});
  
router.post('/', (req, res, next) => {
    res.send('got to POST /users/');
});
  
router.get('/add', (req, res, next) => {
    res.send(views.addPage());
});

module.exports = router;