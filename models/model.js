const mongoose = require("mongoose");

const datasSchema =  new mongoose.Schema({
    title: {type: String,
            required: true,
            unique: true},
    body: {type: String,
        required: true,
        unique: true},
    date:{ type:Date, 
        default: Date.now,
        timezone: "Asia/Tokyo",}
});

// module.exports 
module.exports = mongoose.model("datas", datasSchema);
