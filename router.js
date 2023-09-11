const express = require('express');
const router = express.Router();
const cors = require('cors');

const app = express()
app.use(cors({ origin: '*' }));

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/success',(req,res)=>{
    res.render('respuesta')
})

const form = require('./src/controllers/form');
router.post('/save',form.save)
module.exports = router;