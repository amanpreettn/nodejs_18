const express = require("express");
const axios = require("axios");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/repos/:name", async (req, res) => {
  let params = req.params.name;
  const response = await axios.get(`https://api.github.com/users/${params}`);
  const repo = await axios.get(response.data.repos_url);
  const nrepo = repo.data.map((data) => {
    return data.full_name;
  });

  const result = {
    userName: response.data.login,
    followers: response.data.followers,
    repos: nrepo,
  };
  res.send(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
