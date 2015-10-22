//               _|_|                                                            
//   _|    _|  _|    _|  _|_|_|      _|_|          _|_|_|    _|_|    _|      _|  
//   _|  _|      _|_|    _|    _|  _|    _|      _|        _|    _|  _|_|  _|_|  
//   _|_|      _|    _|  _|    _|  _|_|_|_|      _|        _|    _|  _|  _|  _|  
//   _|  _|    _|_|_|_|  _|    _|  _|    _|      _|        _|    _|  _|      _|  
//   _|    _|  _|    _|  _|_|_|    _|    _|  _|    _|_|_|    _|_|    _|      _|  
//                                                                               
//                                                                               
//   Geisha Counter v1.3                                                                           

// DIRECTIONS	1. Name id1 and id2 to your html elements
//				2. Include this file at the bottom of the page

// @interval 	Update frequency in milliseconds
// @id1 		HTML id for placement #1
// @id2 		HTML id for placement #2
// @alwaysOn	Enables october or later only if false

(function(interval, mainId, id1, id2, alwaysOn){
	function set(id, data){
		if (document.getElementById(id))
			document.getElementById(id).innerHTML = data;				
	}

	function format(string){
		var index = string.length - 3,
			insertable = ' ';

		if(string.length < 3){
			return string;
		}

		return string.substring(0, index) + insertable + string.substring(index, string.length);
	}


	function afterOctober(){
		set(id1, '500 000')
		set(id2, '250 000 kr-')
	}

	function calc(){
		var month = (new Date()).getMonth();
		var start = new Date(2015, month, 1);
		var end = new Date(2015, month+1, 1);

		// If before october
		if(month < 10-1){
			// Do nothing
			return;
		}

		document.getElementById(mainId).style.display = 'block';		

		// If after october
		if(month > 10-1){
			afterOctober();
			return;
		}

		var now = new Date();

		var fraction = 500000 / (end.getTime() - start.getTime());
		var sum = fraction * (now.getTime()-start.getTime());

		var prodStr = format(Math.floor(sum) + '');
		var sumStr = format(Math.floor(sum / 2) + '');

		set(id1, prodStr)
		set(id2, sumStr + ' kr-')
	}

	if(alwaysOn || (new Date()).getMonth() >= 10-1){
		calc();
		setInterval(calc, interval);
	}
})(3000, 'geisha-banner', 'products', 'donations', true);
