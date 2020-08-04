const express = require('express');
const template = require('./index.html');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended:false
}))

const tasks = [];
app.get('/', (req, res) => {
    res.status(200).send(template(tasks));
});

app.post('/add', (req, res)=>{
       console.log(req);
    tasks.push(req.body.task);
    console.log(tasks);
    const tmp = template(tasks);
    console.log(tmp);
    res.status(200).send(tmp);
});


// app.get('/test', (req, res)=>{
//     res.status(200).send(`
//         <h1>
//             Hello test!
//             Bye test!
//         </h1>
//         <a href="/">back</a>
    
//     `)
// })


app.listen(80, () => console.log('server start 80 port'))

