define(['app/canvas'],function(canvas){
    var word_list=[
        {"text":"hello","x":20,"y":0,"v":10,"type_pos":0},
        {"text":"world","x":200,"y":0,"v":10,"type_pos":0}
        ];
    var game_screen = canvas.getCanvas();
    var locked_word=null;
    return {
    	addWord: function(new_word){ 

    		if(word_list.length<=5){
		        var rand_left=Math.floor(Math.random()*game_screen.width);
		        var rand_velo=Math.floor(Math.random()*10+10);
		        word_list.push({"text":"new","x":rand_left,"y":0,"v":rand_velo,"type_pos":0});
		    }
		},
		moveWord: function(){
	        for(var i=0;i<word_list.length;i++){
	            word_list[i].y+=word_list[i].v;
	        }
	    },
	    deleteWord: function(idx){
	    	word_list.splice(idx,1);
	    },
	    getWordList: function(){
	    	return word_list;
	    },
	    lockWord: function(idx, pos){
	    	if(locked_word===null) {
	    		locked_word= new Object();
	    	}
	    	locked_word.idx = idx;
	    	locked_word.pos = pos;
	    	word_list[idx].type_pos=pos;
	    },
	    getLockedWord: function(){
	    	return locked_word;
	    },
	    clearLock: function(){
	    	locked_word = null;
	    },
	    updateList: function(){
	    	for(var i=0;i<word_list.length;i++){
	            if(word_list[i].y>=game_screen.height){
	            	// unlock if out-of-range word is in locking state.
	            	if(locked_word!==null){
	            		if(locked_word.idx===i){
	            			this.clearLock();
	            		}
	            	}
	                this.deleteWord(i);
	                i--;
	            }
	        }
	    },
	    executeKey: function(key){
	    	if(locked_word!==null){
	    		var idx = locked_word.idx;
	            var pos = locked_word.pos;
	            var text = word_list[idx].text;
	            if(text[pos]===key){
	                pos++;
	                if(pos>=text.length){
	                    this.deleteWord(idx);
	                    this.clearLock();
	                    console.log('clear lock!');
	                    return;
	                }
	                this.lockWord(idx,pos);
	                console.log('Index: '+idx+ ' Cur_pos: '+pos);
	            }
	            console.log('locking');
	    	}else{
		    	for(var i =  0;i<word_list.length;i++){
		            if(word_list[i].text[0]===key){
		                console.log('found!');
		                this.lockWord(i,1);
		                return;
		            }
		    	}    
		    }
	    }
	}
});