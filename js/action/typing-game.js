/**
 * Created by User on 13/10/30.
 */
$(document).ready(function(){
    var word_list=[{"word":"hello"},{"word":"world"}];
    for(var i = 0;i<word_list.length;i++){
        $('.game-body').append('<div class="word" data-org-word="'+ word_list[i].word +'" id="word'+i+'">'+word_list[i].word+'</div>');
    }
    initial();
});

function findPos(element){
    if(element){
        var parentPos = findPos(element.offsetParent);
        return {
            x:parentPos.x + element.offsetLeft,
            y:parentPos.y + element.offsetTop
        };
    }else{
        return {x:0,y:0};
    }
}
function initial(){
    var all_div=$('.game-body').children();
    for(var i = 0;i<all_div.length;i++){
        // TODO: change 1000 to max width of canvas or windows
        var rand_left=Math.floor(Math.random()*1000);
        $('#'+all_div[i].id).css('left',rand_left+'px');
    }
}

function move(){
    var all_div = $('.game-body').children();
    for(var i = 0;i<all_div.length;i++){
        var curPos = findPos(all_div[i]);
        // TODO: change 10 to speed
        var newPos = {x:curPos.x,y:curPos.y+10}
        $('#'+all_div[i].id).css('top',newPos.y+'px');
    }
}

// TODO: change 1000 to appropriate small number
var timer = Math.floor(Math.random() +1000);
window.setInterval(function(){
    move();
}, timer);