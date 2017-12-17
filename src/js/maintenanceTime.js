
function displayMaintenanceTime() {
//JQuery function; checks when document is finished loading
$(document).ready(function() {
	$.ajax({
		//Using ajax so we can use php variables in js.
		url : "../../src/php/getMaintenanceTime.php",
		type : "GET",
		success : function(data) {

			var chartID = [];
			var plcData = [];
			//Create js arrays based on php output
			for(var i in data) {
				console.log(data);
				plcData.push(data[i].maintenanceTime);
				plcData.push(data[i].runningTime);
			}
			console.log(plcData);
			//variables for how the chart should look
			var chartdata = {
				labels: ['maintenanceTime', 'runningTime'],
				datasets: [
					{
						data: plcData, //2 values [x,y]
            			borderWidth: 1,
            			backgroundColor:['#36a2eb', '#ff6384']
					}
				]
			};

			var ctx = document.getElementById('maintenanceTimeChart').getContext('2d');
			ctx.canvas.parentNode.style.height = '200px';
			ctx.canvas.parentNode.style.width = '100%';

			//More chart options
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: chartdata,
				options: {
				    responsive:true,
    				maintainApsectRatio:false,
    				cutoutPercentage: 70,
				}
			});
		},
		error : function(data) {

		}
	});
});
}