requirejs.config({
    baseUrl: 'js/lib',
    paths:{
        app: '../app',
        jquery: 'jquery-2.0.3.min',
    }
});

require(['jquery','app/canvas','app/words'], function($,Screen,Words){

    
    var game_screen = new Screen('game-body');
    var words1 = new Words(game_screen);
    $(document).ready(function(){

        game_screen.initial();
        game_screen.textsRender(words1.getWordList());
    });


    $(document).on('keypress', function(e){
        e = e || event;
        var key=String.fromCharCode(e.which);
        console.log('Key: ',key);
        words1.executeKey(key);
    });

    // TODO: change 1000 to appropriate small number
    var timer = Math.floor(50);
    window.setInterval(function(){
        words1.moveWord();
        words1.addWord('new');
        words1.updateList();
        game_screen.textsRender(words1.getWordList());
    }, timer);
});


