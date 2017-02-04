(function($) {
    $(function() {
	var percent = 193
	var max_ml = 3000
	var prevData = []
	//var url = "http://localhost:8000/cgi-bin/get_drank_beer.py"
	var startDate;
	var url = "http://35.167.183.0/cgi-bin/get_drank_beer.py";
	var restart = "http://35.167.183.0/cgi-bin/start_end.py?state=start";

	//開始時刻ゲット
	$.ajax({
	    type: "GET",
	    async: false,
	    url: url,
	    dataType: "json",
	    success: function(response) {
		startDate = new Date(response.data[0].time);
	    }
	});

	$("#main-bg").on("click", function() {
	    $.ajax({
		type: "GET",
		async: true,
		url: restart,
		dataType: "json",
	    });
	    location.reload();
	});

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

	var updateLap = function(data) {
	    var amount = 0;
	    var html = '';
	    var prevDate = new Date(data[0].time);
	    for (var i = 0; i < data.length; i++) {
		lapData = data[i];
		amount += lapData.amount;
		time = (new Date(lapData.time).getTime() - prevDate.getTime()) / 10;
		prevDate = new Date(lapData.time)

		if (i == 0) continue;

		min = ("0" + (Math.floor(time / 6000) % 60)).slice(-2);
		sec = ("0" + Math.floor(time / 100) % 60).slice(-2);
		milli = ("0" + Math.floor(time) % 100).slice(-2);
		timeStr = min + ':' + sec + ':' + milli

		html = '<dl class="timer-list">'
		    + '<dd class="timer-list_item--amount">'
		    + amount + 'ml</dd><dd class="timer-list_item--time">'
		    + timeStr + '</dd></dl>' + html;
	    }
	    $('#lap_times')[0].innerHTML = html;
	};

	var watchDrank = function() {
	    $.ajax({
		type: "GET",
		//async: false,
		async: true,
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
			updateLap(data);

			if (amount >= 3000) {
			    location.href = "result/index.html"
			} else if (amount >= 2000) {
			    $('.wrapper').attr('class', 'wrapper wrapper--party');
			    $('.main-container').attr('class', 'main-container main-container--party');
			    $('.timer-container').attr('class', 'timer-container timer-container--party');
			}

			console.log(amount, to_percent);
			console.log(data)
		    } else if (data.length < prevData.length) {
			location.reload();
		    }
		    prevData = data
		}
	    });
	};

	var updateDate = function() {
	    time = (Date.now() - startDate.getTime()) / 10;
	    min = ("0" + (Math.floor(time / 6000) % 60)).slice(-2);
	    sec = ("0" + Math.floor(time / 100) % 60).slice(-2);
	    milli = ("0" + Math.floor(time) % 100).slice(-2);
	    timeStr = min + ':' + sec + ':' + milli
	    $('.timer-main')[0].innerHTML = timeStr;
	};


	watchDrank();
	setInterval(watchDrank, 5000);
	setInterval(updateDate, 10);
    });
})(jQuery);
