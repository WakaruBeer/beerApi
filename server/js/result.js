(function($) {
    $(function() {
	var url = "http://35.167.183.0/cgi-bin/get_drank_beer.py";
	var restart = "http://35.167.183.0/cgi-bin/start_end.py?state=start";

	$("#main-bg").on("click", function() {
	    $.ajax({
		type: "GET",
		async: false,
		url: restart,
		dataType: "json",
	    });
	    location.href = '../index.html'
	});

	$.ajax({
	    type: "GET",
	    async: false,
	    url: url,
	    dataType: "json",
	    success: function(response) {
		var data = response.data;
		var amount = 0;
		var timeList = []
		var labels = []

		var prevDate = new Date(data[0].time);
		for (var i = 0; i < data.length; i++) {
		    lapData = data[i];
		    amount += lapData.amount;
		    time = (new Date(lapData.time).getTime() - prevDate.getTime()) / 1000;
		    prevDate = new Date(lapData.time)

		    if (i == 0) continue;
		    labels.push((amount / 1000) + "L");
		    timeList.push(time);
		}

		var options = {
                    animation : true,
                    animationSteps: 60,
                    animationEasing: "easeInOutCubic",
		    scaleLabel : "<%=value%>s",
		    //responsive:true
		};

		var lineChartData = {
		    //labels : [" ","0.25","0.5","0.75","1","1.25","1.5","1.75","2","2.25","2.5","2.75","3"],
		    labels : labels,
		    datasets : [
			{
			    label: "青データ",
			    fillColor : "rgba(151,187,205,0.2)",
			    strokeColor : "rgba(133,175,244,1)",
			    pointColor : "rgba(133,175,244,1)",
			    pointStrokeColor : "white",
			    //pointHighlightFill : "yellow",
			    pointHighlightStroke : "blue",
			    pointDot : false,
			    data : timeList,
			}
		    ]
		}

		var ctx = document.getElementById("graph-area").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData,options);

		time = (new Date(data[data.length - 1].time).getTime() - new Date(data[0].time).getTime()) / 10;
		min = ("0" + (Math.floor(time / 6000) % 60)).slice(-2);
		sec = ("0" + Math.floor(time / 100) % 60).slice(-2);
		milli = ("0" + Math.floor(time) % 100).slice(-2);
		timeStr = min + ':' + sec + ':' + milli
		$("#total_time")[0].innerHTML = timeStr
	    }
	});
    });
})(jQuery);
