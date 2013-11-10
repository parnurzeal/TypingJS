define(['app/canvas'],function(canvas){
    var word_list=[
        {"word":"hello","x":20,"y":0,"v":10},
        {"word":"world","x":200,"y":0,"v":10}
        ];
    return {
    	addWord: function(new_word){ 
    		var game_screen = canvas.getCanvas();
    		if(word_list.length<=20){
		        var rand_left=Math.floor(Math.random()*game_screen.width);
		        var rand_velo=Math.floor(Math.random()*10+10);
		        word_list.push({"word":"new","x":rand_left,"y":0,"v":rand_velo});
		    }
		},
		move: function(){
	        for(var i=0;i<word_list.length;i++){
	            word_list[i].y+=word_list[i].v;
	            if(word_list[i].y>=canvas.height){
	                word_list.splice(i,1);
	                i--;
	            }
	        }
	    },
	    getWordList: function(){
	    	return word_list;
	    }
	}
});