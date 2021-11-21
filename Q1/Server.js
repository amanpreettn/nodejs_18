const express = require("express");
let session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();

const myusername = "abc12";
const mypassword = "abc";
const oneDay = 1000 * 60 * 60 * 24;

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    cookie: { maxAge: oneDay },
    saveUninitialized: true,
  })
);
app.use(express.json());

function isAuth(req, res, next) {
  req.session.isAuth = true;
  console.log(req.session.isAuth)
  if (req.session.isAuth) {
    next();
  } else {
    res.status(500).send("Invalid username or password");
  }
}

app.post("/user", isAuth, (req, res) => {
  if (req.body.username == myusername && req.body.password == mypassword) {
    session = req.session;
    session.userid = req.body.username;
    console.log(session);
    res.send("Login Successful");
  } else {
    res.status(500).send("Invalid username or password");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log("Server is running at 3000");
});
