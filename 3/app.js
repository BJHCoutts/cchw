const express = require(`express`);
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const welcomeRouter = require('./routes/welcome');
const app = express();
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.locals.quiz = require('./quiz.json');
app.post("/results", function(req, res){
    console.log('FORM SUBMITTED');
    // const answers = {
    //     quiz[0].answerIndex:req.body.1;
    //     quiz[1].answerIndex:req.body.2;
    //     quiz[2].answerIndex:req.body.3;
    //     quiz[3].answerIndex:req.body.4;
    //     quiz[4].answerIndex:req.body.5;
    // }
});


app.use(cookieParser());
app.use((request, response, next) => {
    const username = request.cookies.username;
    response.locals.username = '';
    if (username) {
    response.locals.username = username;
    console.log(`🤓 User's username is username`);
    }
    next();
});
app.use('/', welcomeRouter);
const PORT = 4545;
const DOMAIN = 'localhost';
app.listen(PORT, DOMAIN, () => {
    console.log(`💻 Server listening on http://DOMAIN:PORT`);
});