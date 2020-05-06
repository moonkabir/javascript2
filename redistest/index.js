const express       = require('express');
const rc            = require('./redis');
const bodyParser    = require('body-parser');
const app           = express();
app.use(bodyParser.json());

app.post("/tasks", (req, res) => {
    if (req.body.task) {
        rc.lpushAsync('my_tasks', req.body.task)
            .then(e => res.json({
                message: "data added"
            }))
    } 
    else {
        res.json({
            error: true,
            message: "please specify a task"
        }).status(400);
    }
})

app.get("/tasks", (res, req) => {
    rc.lrangeAsync('my_tasks', 0, -1)
        .then(d => {
            res.json({
                data: d
            })
        }).catch(e => {
            res.json({
                error: true,
                message: "could not list tasks"
            }).status(500);
        })
})

app.listen(4000);