/**
 * Created by User on 13/10/30.
 */
$(document).ready(function(){
    var word_list=[{"word":"hello"},{"word":"world"}];
    for(var i = 0;i<word_list.length;i++){
        $('.game-body').append('<div class="word" id="word'+i+'">'+word_list[i].word+'</div>');
    }
});

function move(){
    var all_div = $('.game-body').children();
    console.log(all_div);
    for(var i = 0;i<all_div.length;i++){
        console.log(all_div[i].id);
        var current_top = $('#'+all_div[i].id).css('top');
        console.log(current_top);
        //all_div[i].css('top',current_top+10+'px');
    }
}


var timer = Math.floor(Math.random() +1000);
window.setInterval(function(){
    move();
}, timer);