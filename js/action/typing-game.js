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
}
function clearCanvas(){
    ctx.save();
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.restore();
}
function ctxTextsRender(){
    clearCanvas();
    for(var i=0;i<word_list.length;i++){
        ctx.fillText(word_list[i].word,word_list[i].x,word_list[i].y);
    }
}

$(document).ready(function(){
    ctxInitial();
    ctxTextsRender();
});

function addWord(new_word){
    if(word_list.length<=20){
        var rand_left=Math.floor(Math.random()*canvas.width);
        var rand_velo=Math.floor(Math.random()*10+10);
        word_list.push({"word":"new","x":rand_left,"y":0,"v":rand_velo});
    }
}

function move(){
    for(var i=0;i<word_list.length;i++){
        word_list[i].y+=word_list[i].v;
        if(word_list[i].y>=canvas.height){
            word_list.splice(i,1);
            i--;
        }
    }
}

// TODO: change 1000 to appropriate small number
var timer = Math.floor(100);
window.setInterval(function(){
    move();
    addWord();
    ctxTextsRender();
}, timer);