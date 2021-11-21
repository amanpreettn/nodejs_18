const express = require("express");
const axios=require("axios")
const app = express();
const bodyParser=require("body-parser")
const config=require("./config")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/api/repos", (req, res) => {
    axios({
        method: "get",
        url: `https://api.github.com/users/${config.githubUsername}/repos`,
        headers: {
            Authorization: `Bearer ${config.githubToken}`,
            "Content-Type": "application/json",
            "Accept": "application/vnd.github.mercy-`preview+json"
        }
    }).then(response => {
        res.send(response.data);
    }).catch(err => {
        res.send(err);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
})

