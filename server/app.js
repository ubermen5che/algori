var express = require('express');
var app = express();
const mongoose = require('mongoose');
const path = require('path');
var session = require('express-session');
const cors = require('cors');
mongoose.connect('mongodb+srv://serepa:8428@cluster0.of91ndo.mongodb.net/algori', { useUnifiedTopology: true, useNewUrlParser: true });
const userRouter = require('./routes/user');
const problemRouter = require('./routes/problem');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({ secret: 'MySecret', resave: false, saveUninitialized: true }));
// Passport setting
//app.use(passport.initialize());
//app.use(passport.session());

// Routes

app.use('/user', userRouter);
app.use('/api', problemRouter);

const port = process.env.PORT || 5000;
// Port setting
// 라우트 설정

app.listen(port, function () {
    console.log('server on! http://localhost:' + port);
});

module.exports = app;