requirejs.config({
    baseUrl: 'js/lib',
    paths:{
        app: '../app',
        jquery: 'jquery-2.0.3.min'
    }
});

require(['jquery','app/canvas','app/words'], function($,game_screen,words){
    
    $(document).ready(function(){
        game_screen.ctxInitial();
        game_screen.textsRender(words.getWordList);
    });

    // TODO: change 1000 to appropriate small number
    var timer = Math.floor(1000);
    window.setInterval(function(){
        words.move();
        words.addWord(null);
        game_screen.textsRender(words.getWordList());
    }, timer);
});


