const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 8000;
const datas = require("./models/model");
require('dotenv').config(); //.envファイルを読み込む
const userName = process.env.USER_NAME;
const userKey = process.env.USER_KEY;
const dbName = process.env.DB_NAME;




app.use(express.json());


app.listen(PORT, () => console.log(`server runnning at http://localhost:${PORT}`));

app.use(express.static("public"));


mongoose.connect(`mongodb+srv://${userName}:${userKey}@${dbName}.hlbwtrl.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => { console.log("DB connected")})
        .catch( (err) => console.log(err))
// データベースの中身をgetする api
app.get("/get/api", async(req, res) => {
    try {
        const user  = await datas.find({});
        res.json(user);
    } catch(e) {
        console.log(e);
    }
})

// データベースにpostする api
app.post("/post/api", async(req, res) => {
    try {
        const user  = await datas.create(req.body);
        res.json(user);
    } catch(e) {
        console.log(e);
    }
});





