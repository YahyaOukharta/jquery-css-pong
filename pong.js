const $pong = $("#pong");
const $playerPaddle = $("#p-paddle");
const $aiPaddle = $("#ai-paddle");
const $ball = $("#ball");

const aiPaddle={
    speed:5,
    dir:1,
    top:0

}

$pong.mousemove(function(evt){
    const top = Math.min(
                $pong.height() - $playerPaddle.height(),
                evt.pageY - $pong.offset().top);
    setY(top);


});
function update(){
    aiPaddle.top+=aiPaddle.dir*aiPaddle.speed;
    if( aiPaddle.top>$pong.height()-$aiPaddle.height() ||
        aiPaddle.top<0
    ){
        aiPaddle.dir*=-1;
    }
    $aiPaddle.css({
        top: `${aiPaddle.top}px`
    });
}

setInterval(update,1000/30);

function setX(X){
    $playerPaddle.css({
        left: `${X}px`
    });
}
function setY(Y) {
    $playerPaddle.css({
        top: `${Y}px`
    });
}