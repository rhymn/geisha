//               _|_|                                                            
//   _|    _|  _|    _|  _|_|_|      _|_|          _|_|_|    _|_|    _|      _|  
//   _|  _|      _|_|    _|    _|  _|    _|      _|        _|    _|  _|_|  _|_|  
//   _|_|      _|    _|  _|    _|  _|_|_|_|      _|        _|    _|  _|  _|  _|  
//   _|  _|    _|_|_|_|  _|    _|  _|    _|      _|        _|    _|  _|      _|  
//   _|    _|  _|    _|  _|_|_|    _|    _|  _|    _|_|_|    _|_|    _|      _|  
//                                                                               
//   Geisha Counter v1.1                                                                           

// DIRECTIONS	1. Name id1 and id2 to your html elements
//				2. Include this file at the bottom of the page

// @interval 	Update frequency in milliseconds
// @id1 		HTML id for placement #1
// @id2 		HTML id for placement #2
// @alwaysOn	Enables october or later only if false

(function(interval, id1, id2, alwaysOn){
	function set(id, data){
		if (document.getElementById(id))
			document.getElementById(id).innerHTML = data;				
	}

	function calc(){
		var month = (new Date()).getMonth();
		var start = new Date(2015, month, 1);
		var end = new Date(2015, month+1, 0);

		var now = new Date();

		var fraction = 500000 / (end.getTime() - start.getTime());
		var sum = fraction * (now.getTime()-start.getTime());

		set(id1, Math.floor(sum))
		set(id2, Math.floor(sum / 2))
	}

	if(alwaysOn || (new Date()).getMonth() >= 10-1){
		calc();
		setInterval(calc, interval);
	}
})(3000, 'products', 'donations', true);
