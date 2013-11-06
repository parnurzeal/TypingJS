/**
 * Created by User on 13/10/30.
 */
var word_list=[
    {"word":"hello","x":20,"y":0,"v":10},
    {"word":"world","x":200,"y":0,"v":10}
    ];

var canvas = document.getElementById('game-body');
var ctx = canvas.getContext('2d');


function ctxInitial(){
    ctx.font = "15pt Arial";
    ctx.textBaseline = "top";
    for(var i =0;i<word_list.length;i++){
        ctx.fillText(word_list[i].word,word_list[i].x,word_list[i].y);
    }
}

function ctxTextsRender(){
    for(var i=0;i<word_list.length;i++){

    }
}

$(document).ready(function(){
    ctxInitial();
    //initial();
});

function addWord(new_word){
    if(word_list.length<=20){
        var rand_left=Math.floor(Math.random()*canvas.width);
        word_list.push({"word":"new","x":rand_left,"y":0,"v":10});
    }
}

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
    var content='';
    for(var i = 0;i<word_list.length;i++){
        content+='<div class="word" '
            +'style="left: '+word_list[i].x+'px; top: ' +word_list[i].y+'px" '
            +'data-org-word="'+ word_list[i].word +'" '
            +'id="word'+i+'">'
            + word_list[i].word
            + '</div>';
    }
    $('.game-body').html(content);
}

function move(){
    for(var i=0;i<word_list.length;i++){
        word_list[i].y+=10;
    }
    var content='';
    for(var i = 0;i<word_list.length;i++){
        content+='<div class="word" '
            +'style="left: '+word_list[i].x+'px; top: ' +word_list[i].y+'px" '
            +'data-org-word="'+ word_list[i].word +'" '
            +'id="word'+i+'">'
            + word_list[i].word
            + '</div>';
    }
    $('.game-body').html(content);
    /*var all_div = $('.game-body').children();
    for(var i = 0;i<all_div.length;i++){
        var curPos = findPos(all_div[i]);
        // TODO: change 10 to speed
        var newPos = {x:curPos.x,y:curPos.y+10}
        $('#'+all_div[i].id).css('top',newPos.y+'px');
    }*/

    /*console.log(word_list);
    for(var i = 0;i<word_list.length;i++){
        $('.game-body').append('<div class="word" data-org-word="'+ word_list[i].word +'" id="word'+i+'">'+word_list[i].word+'</div>');
    }*/
}

// TODO: change 1000 to appropriate small number
var timer = Math.floor(Math.random() +1000);
window.setInterval(function(){
    move();
    addWord();
}, timer);