const express = require(`express`);
const app = express();
const logger = require('morgan');
const path = require('path');
const welcomeRouter = require('./routes/welcome');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.locals.quiz = require('./quiz.json');
app.post("/", function(req, res){
    console.log('FORM SUBMITTED');
    
    console.log(req.body);
    const form = req.body;
    // const f1 = form.q1;
    // const f2 = form.q2;
    // const f3 = form.q3;
    // const f4 = form.q4;
    // const f5 = form.q5;
    console.log(form);
    res.render("index", {form});
});

// let count = 0;
// const answers = {
//     quiz[0].answerIndex:req.body.1;
//     quiz[1].answerIndex:req.body.2;
//     quiz[2].answerIndex:req.body.3;
//     quiz[3].answerIndex:req.body.4;
//     quiz[4].answerIndex:req.body.5;
// }

// app.get('/', function(req, res) {
//     console.log('Cookies: ', req.cookies)
//   })

// app.use(cookieParser());
// app.use((request, response, next) => {
//     const username = request.cookies.username;
//     response.locals.username = '';
//     if (username) {
//     response.locals.username = username;
//     console.log(`🤓 User's username is username`);
//     }
//     next();
// });
app.use('/', welcomeRouter);
const PORT = 4545;
const DOMAIN = 'localhost';
app.listen(PORT, DOMAIN, () => {
    console.log(`💻 Server listening on http://DOMAIN:PORT`);
});