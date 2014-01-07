requirejs.config({
    baseUrl: 'js/lib',
    paths:{
        app: '../app',
        jquery: 'jquery-2.0.3.min',
    }
});

require(['jquery','app/screen','app/words'], function($,Screen,Words){

    var words = new Words();
    var game_screen = new Screen('game-body', words);
    $(document).ready(function(){

        game_screen.initial();
        game_screen.textsRender(words.getWordList());

    });


    $(document).on('keypress', function(e){
        e = e || event;
        var key=String.fromCharCode(e.which);
        console.log('Key: ',key);
        words.executeKey(key);
    });

    // TODO: change 1000 to appropriate small number
    var timer = Math.floor(50);
    window.setInterval(function(){
        words.moveWord();
        words.addWord('new');
        words.updateList();
        game_screen.textsRender(words.getWordList());
    }, timer);
});


