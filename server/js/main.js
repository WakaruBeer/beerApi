(function($) {
    $(function() {
	var percent = 193
	var max_ml = 3000
	var prevData = []
	var url = "http://localhost:8000/cgi-bin/get_drank_beer.py"
	//var url = "http://35.167.183.0/cgi-bin/get_drank_beer.py"

	var changeBeerAmount = function(to) {
	    var timer;
	    var change = function() {
		if(percent <= to) {
		    clearInterval(timer);
		    return;
		}
		percent -= 0.5;
		$('.wave').css('top', percent + '%');
	    }

	    timer = setInterval(change, 50);
	};

	var watchDrank = function() {
	    $.ajax({
		type: "GET",
		async: false,
		url: url,
		dataType: "json",
		success: function(response) {
		    var amount = 0;
		    var to_percent;
		    data = response.data;
		    //データ更新があった場合
		    if (data.length > prevData.length) {
			for (var i = 0; i < data.length; i++) {
			    amount += data[i].amount;
			}
			$('.glass-amount__number')[0].innerHTML = amount;
			to_percent = 200 - amount / max_ml * 100;
			changeBeerAmount(to_percent);
			console.log(amount, to_percent);
			console.log(data)
		    }
		}
	    });
	};
	watchDrank();
	setInterval(watchDrank, 5000);
    });
})(jQuery);
