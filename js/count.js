// for count 1
var date1 = new Date("11/01/2016");
var date2 = new Date();
var count1 = date2.getFullYear() - date1.getFullYear();
$('#cnt1').text(count1);

// for count 2
var datec = new Date('01 March 2021');
var count2 = Math.ceil((date2.getTime() - datec.getTime()) / (1000 * 3600 * 24));
$('#cnt2').text(count2);

// For Github API data
let totalrepo = 0;
$(document).ready(function(){
    $.ajax({
        url:"https://api.github.com/users/raku-seru",
        dataType: "json",
        success : function( res ) {
            totalrepo = res.public_repos
            $('#repository').text(totalrepo)
            // console.log(res);
        }
    });
    return false;
});