requirejs.config({
    baseUrl: 'js/lib',
    paths:{
        app: '../app',
        jquery: 'jquery-2.0.3.min'
    }
});

require(['jquery','app/canvas','app/words'], function($,game_screen,words){
    
    $(document).ready(function(){
        game_screen.initial();
        game_screen.textsRender(words.getList());
    });

    // TODO: change 1000 to appropriate small number
    var timer = Math.floor(100);
    window.setInterval(function(){
        words.move();
        words.add(null);
        game_screen.textsRender(words.getList());
    }, timer);
});


