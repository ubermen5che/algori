const express = require('express');
const router = express.Router();
const Problem = require('../models/problem')

router.post('/problems', (req, res) => {
    let data = {
        userId: null,
        title: null,
        link: null,
        step: null,
        notificationDate: null,
        tagList: null,
        content: null,
    }

    if (req.body) {
        const {
            userId, title, link, step, notificationDate, tagList, content
        } = req.body;

        data = { userId, title, link, step, notificationDate, tagList, content };
        Problem.create(data, (error, problem) => {
            if (error) {
                console.log(error);
                res.json(error);
            } else {
                res.json({ problemId: problem._id });
            }
        })
    } else {
        res.json("error");
    }
});

router.get('/problems/:problemId', (req, res) => {
    const problemId = req.params.problemId;
    Problem.findOne({ _id: problemId }, (error, problem) => {
        if (error) {
            res.json(error);
        } else {
            res.json(problem);
        }
    })
})

router.delete('/problems/:problemId', (req, res) => {
    const problemId = req.params.problemId;
    Problem.deleteOne({ problemId }, (error, problem) => {
        if (error) {
            console.log(error);
            res.json(error);
        } else {
            res.json(problem);
        }
    })
})

router.get('/problems', (req, res) => {
    const tagName = req.query.tag;
    const userId = req.query.userId;

    console.log(userId);
    if (userId === 'null') {
        res.json("");
    } else {
        if (tagName === "") {
            Problem.find({}, (error, problems) => {
                res.json(problems);
            });
        } else {
            Problem.find({ tagList: { $all: [tagName] } }, (error, problems) => {
                res.json(problems);
            })
        }
    }
})

router.get('/tags', (req, res) => {
    const userId = req.query.userId;
    let tags = {};
    var result = [];

    if (userId === 'null') {
        res.json("");
    } else {
        Problem.find({}, (error, problems) => {
            if (error) {
                res.json(error);
            }
            for (let i = 0; i < problems.length; i++) {
                let tmp = problems[i].tagList;
                for (let j = 0; j < tmp.length; j++) {
                    if (tmp[j] in tags) {
                        tags[tmp[j]] += 1;
                    } else {
                        tags[tmp[j]] = 1;
                    }
                }
            }

            let keys = Object.keys(tags);

            if (keys.length === 0) {
                res.send({ error: 'EMPTY TAG' });
            }

            for (let i = 0; i < keys.length; i++) {
                let json = {};
                json['tagName'] = keys[i];
                json['count'] = tags[keys[i]];
                result.push(json);
            }
            res.json(result);
        })
    }
})
module.exports = router;