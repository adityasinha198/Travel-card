const mongoose = require('mongoose')

const capSchema = new mongoose.Schema({
    
dailyFare:{
    type:String
},
weeklyfare:{
    type:String
}

},{timestamps:true})

module.exports = mongoose.model("cap",capSchema)