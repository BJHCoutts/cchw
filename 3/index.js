const express = require('express');
const app = express();
const logger = require(
);
const cookieParser = require(
);
const path = require(
);
// ROUTER REQUIRES
app.get('/doggologist', function (req, res) {
    res.send('Are you?');
  });

app.set(
, 
);

// MIDDLEWARE
// HTTP Request Logger
app.use(logger(
));
// Static Assets
// Use path.join to combine strings into directory paths.
// Example: path.join(
, 
) -> 'fotorol/public'

// __dirname is global variable useable in file run by Node.
// It gives the full path, beginning from the root of your
// OS, to the file where __dirname is being used.
console.log(
app.use(express.static(path.join(__dirname, 
)));

// Body Parser

app.use(express.urlencoded({ extended: true }));:,

// Cookie Parser
app.use(cookieParser());


const PORT = '4646';
const DOMAIN = 'localhost';
app.listen(PORT, DOMAIN, () => {
  console.log(`🖥 Server listenning on http://${DOMAIN}:${PORT}`);
});