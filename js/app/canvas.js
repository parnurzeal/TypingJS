define(function(){
	var canvas = document.getElementById('game-body');
	var ctx = canvas.getContext('2d');
    return {
    	getCanvas: function() { return canvas;},
    	initial: function() {
    		ctx.font = "15pt Arial";
        	ctx.textBaseline = "top";
    	},
    	clear: function(){
    		ctx.save();
       		ctx.setTransform(1,0,0,1,0,0);
        	ctx.clearRect(0,0,canvas.width, canvas.height);
        	ctx.restore();
    	},
    	textsRender: function(word_list){
    		this.clear();
	        for(var i=0;i<word_list.length;i++){
	        	var word = word_list[i];
	        	// won't render already typed text
	        	if(word.type_pos!==0){
	        		ctx.fillText(word.text.substring(word.type_pos),word.x,word.y);
	        	}else{
	            	ctx.fillText(word.text,word.x,word.y);
	            }
	        }
    	}
    }
});