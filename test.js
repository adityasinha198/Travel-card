const moment = require('moment')
const time = moment().format("HH:mm")
const current = moment(`${time}`,"HH:mm")
const start = moment('07:30',"HH:mm")
const end = moment('07:10',"HH:mm")
console.log(time)
console.log(start)
console.log(end)
console.log(current)
if(start>end){
    console.log("yes")
}






