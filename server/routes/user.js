const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcrypt')

router.post('/signin', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email: email }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    res.json({ userId: user._id });
                } else {
                    res.redirect('/signin')
                }
            })
        }
        else {
            res.redirect('/signin')
        }
    })
})

router.post('/signup', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email: email }, (error, user) => {
        // 유저 존재하면 회원가입 x
        if (user) {
            res.redirect('/signin')
        } else {
            User.create({ email, password }, (error, user) => {
                if (error) {
                    console.log(error)
                    return res.redirect('/signup')
                } else {
                    return res.redirect('/')
                }
            })
        }
    })
})
module.exports = router;