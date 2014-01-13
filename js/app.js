requirejs.config({
    baseUrl: 'js/lib',
    paths:{
        app: '../app',
        jquery: 'jquery-2.0.3.min',
        datachannel: 'DataChannel',
        screenshot: 'screenshot'
    },
    shim: {
        'datachannel': {
            'exports': 'DataChannel'
        }
    }
});

require(['jquery','datachannel','app/screen','app/words'], function($,DataChannel,Screen,Words){

    var words = new Words();
    var game_screen = new Screen('game-body', words);
    var words2 = new Words();
    var game_screen2 = new Screen('game-body2',words2);


    var channel = new DataChannel();
    var open = false;

    channel.onopen = function(){
        open=true;
    };
    channel.onmessage = function(message, userid, latency){
        console.log('Message: ', message, userid, latency);
        words2.setWords(message);
    };
    channel.onleave = function(userid){
        console.log('User Leave: ', userid);
    }

    $(document).on('keypress', function(e){
        e = e || event;
        var key=String.fromCharCode(e.which);
        console.log('Key: ',key);
        words.executeKey(key);
        var channel_val = 123456789;        
        if(key==='o'){
            channel.open(channel_val);
            console.log('Open: ', channel_val);
        }else if(key==='j'){
            channel.connect(channel_val);
            console.log('Join: ', channel_val);
        }else{
            //channel.send(key);
        }
    });

    // TODO: change 1000 to appropriate small number
    var timer = Math.floor(17);
    window.setInterval(function(){
        words.moveWord();
        words.addWord('new');
        words.updateList();
        game_screen.render();
        if(open){
            channel.send(words.getWordList());
        }
        game_screen2.render();
    }, timer);


});


