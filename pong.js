const $pong = $("#pong");
const $playerPaddle = $("#p-paddle");

$pong.mousemove(function(evt){
    const top = Math.min(
                $pong.height() - $playerPaddle.height(),
                evt.pageY - $pong.offset().top);
    setY(top);


});

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