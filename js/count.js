// for count 1
var date1 = new Date("11/01/2016");
var date2 = new Date();
var count1 = date2.getFullYear() - date1.getFullYear();
document.getElementById('cnt1').innerHTML = count1;

// for count 2
var datec = new Date('01 March 2021');
var count2 = Math.ceil((date2.getTime() - datec.getTime()) / (1000 * 3600 * 24));
document.getElementById('cnt2').innerHTML = count2;