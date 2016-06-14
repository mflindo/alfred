var url = document.URL;
var fb = "https://www.facebook.com/sharer/sharer.php?u=";
var tw = "https://twitter.com/home?status=";
var gp = "https://plus.google.com/share?url=";
$('#fb').attr('href', fb+url);
$('#tw').attr('href', tw+url);
$('#gp').attr('href', gp+url);
