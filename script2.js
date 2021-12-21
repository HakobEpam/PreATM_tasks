// var today = new Date();   
// console.log(today);
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;
// console.log(time);
// var today;
// var secondsOfToday;

function secondsCount(){
    var today = new Date();
    var secondsOfToday = today.getHours()*60*60 + today.getMinutes()*60 + today.getSeconds();
    return secondsOfToday;
}
var t = secondsCount();
console.log(t)