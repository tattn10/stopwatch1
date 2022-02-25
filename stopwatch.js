
    var time;
var secs=0;
var milsecs=0;
var mins=0;
$(".start").click(function(){
    clearInterval(time);
 time=setInterval(startTimer,10);
});

$(".stop").click(function(){
    clearInterval(time);
});

$(".reset").click(function(){
   clearInterval(time);
   secs="00";
   milsecs="00";
   mins="00";
   $(".sec").text(secs);
   $(".milsec").text(milsecs);
   $(".min").text(mins);
});
function startTimer(){
    milsecs++;
    if(milsecs<=9){
        $(".milsec").text("0"+ milsecs);
    }
    if(milsecs>9){
        $(".milsec").text(milsecs);
    }
    if(milsecs>99){
        secs++;
        $(".sec").text("0"+ secs);
        milsecs=0;
    $(".milsec").text("0"+0);
    }
    if(secs>9){
        $(".sec").text(secs);
    }
    if(secs>59){
       mins++;
       secs=0;
       $(".min").text("0"+mins);
    }
    if(mins>9){
        $(".min").text(mins);
    }
}


