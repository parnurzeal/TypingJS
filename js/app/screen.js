define(function(){
	function Screen(screen_id, word_box){
        this.canvas = document.getElementById(screen_id);
        this.ctx = this.canvas.getContext('2d');
        this.word_box = word_box;
    }

    Screen.prototype={
    	getCanvas: function() { return this.canvas;},
    	initial: function() {
    		this.ctx.font = "15pt Arial";
        	this.ctx.textBaseline = "top";
    	},
    	clear: function(){
    		this.ctx.save();
       		this.ctx.setTransform(1,0,0,1,0,0);
        	this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        	this.ctx.restore();
    	},
    	textsRender: function(){
    		this.clear();
            var width = this.canvas.width;
            var height = this.canvas.height;
            var word_list = this.word_box.getWordList();
	        for(var i=0;i<word_list.length;i++){
	        	var word = word_list[i];
	        	// won't render already typed text
	        	if(word.type_pos!==0){
	        		this.ctx.fillText(word.text.substring(word.type_pos),word.x*width,word.y*height);
	        	}else{
	            	this.ctx.fillText(word.text,word.x*width,word.y*height);
	            }
	        }
    	}
    };
    return Screen;
});