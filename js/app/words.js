define(['app/canvas'],function(canvas){
    var word_list=[
        {"word":"hello","x":20,"y":0,"v":10},
        {"word":"world","x":200,"y":0,"v":10}
        ];
    var game_screen = canvas.getCanvas();
    return {
    	add: function(new_word){ 

    		if(word_list.length<=20){
		        var rand_left=Math.floor(Math.random()*game_screen.width);
		        var rand_velo=Math.floor(Math.random()*10+10);
		        word_list.push({"word":"new","x":rand_left,"y":0,"v":rand_velo});
		    }
		},
		move: function(){
	        for(var i=0;i<word_list.length;i++){
	            word_list[i].y+=word_list[i].v;
	            if(word_list[i].y>=game_screen.height){
	                word_list.splice(i,1);
	                i--;
	            }
	        }
	    },
	    getList: function(){
	    	return word_list;
	    }
	}
});