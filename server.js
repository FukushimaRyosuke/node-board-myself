const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 8000;
const datas = require("./models/model");

app.use(express.json());


app.listen(PORT, () => console.log(`server runnning at http://localhost:${PORT}`));

app.use(express.static("public"));


mongoose.connect("mongodb+srv://fuku:a@cluster1.hlbwtrl.mongodb.net/?retryWrites=true&w=majority")
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





