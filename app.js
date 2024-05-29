const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const userRouter = require('./routers/user')
require('./report')
const port = 3000;


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

app.use('/users', userRouter);

const server = app.listen(port, () => {
    console.log('server started on:', port);
})
