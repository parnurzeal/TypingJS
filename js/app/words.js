define(function(){
    function Words(){
		this.word_list=[
        {"text":"hello","x":0.01,"y":0,"v":0.01,"type_pos":0},
        {"text":"world","x":0.50,"y":0,"v":0.01,"type_pos":0}
        ];
        this.locked_word=null;
    }

    Words.prototype = {
    	addWord : function(new_word){
    		if(this.word_list.length<=5){
		        var rand_left=Math.random();
		        var rand_velo=Math.random()*0.01;
		        this.word_list.push({"text":new_word,"x":rand_left,"y":-0.10,"v":rand_velo,"type_pos":0});
		    }
	    },
		moveWord: function(){
	        for(var i=0,len=this.word_list.length;i<len;i++){
	            this.word_list[i].y+=this.word_list[i].v;
	        }
	    },
	    deleteWord: function(idx){
	    	this.word_list.splice(idx,1);
	    },
	    getWordList: function(){
	    	return this.word_list;
	    },
	    lockWord: function(idx, pos){
	    	if(this.locked_word===null) {
	    		this.locked_word= {};
	    	}
	    	this.locked_word.idx = idx;
	    	this.locked_word.pos = pos;
	    	this.word_list[idx].type_pos=pos;
	    },
	    getLockedWord: function(){
	    	return this.locked_word;
	    },
	    clearLock: function(){
	    	this.locked_word = null;
	    },
	    updateList: function(){
	    	for(var i=0;i<this.word_list.length;i++){
	            if(this.word_list[i].y>=1){
	            	// unlock if out-of-range word is in locking state.
	            	if(this.locked_word!==null){
	            		if(this.locked_word.idx===i){
	            			this.clearLock();
	            		}
	            	}
	                this.deleteWord(i);
	                i--;
	            }
	        }
	    },
	    executeKey: function(key){
	    	if(this.locked_word!==null){
	    		var idx = this.locked_word.idx;
	            var pos = this.locked_word.pos;
	            var text = this.word_list[idx].text;
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
		    	for(var i =  0,len=this.word_list.length;i<len;i++){
		            if(this.word_list[i].text[0]===key){
		                console.log('found!');
		                this.lockWord(i,1);
		                return;
		            }
		    	}    
		    }
	    }
	};
	return Words;
});