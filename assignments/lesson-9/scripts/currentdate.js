var n = new Date();
var y = n.getFullYear();
var d = n.getDay();
var dom = n.getDate();
var month = new Array(12);
month[0] = "January";
month[1] = "Feburary";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var day = new Array(7);
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";

var wd = day[n.getDay()];
var m = month[n.getMonth()];
document.getElementById("date").innerHTML = wd + ", " + dom + " " + m + " " + y;