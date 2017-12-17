
function displayRequestedFloors() {
//JQuery function; checks when document is finished loading
$(document).ready(function() {
	$.ajax({
		//Using ajax so we can use php variables in js.
		url : "../../src/php/getRequestedFloors.php",
		type : "GET",
		success : function(data) {

			var chartID = [];
			var plcData = [];
			//Create js arrays based on php output
			for(var i in data) {
				plcData.push(data[i].floor1Count);
				plcData.push(data[i].floor2Count);
				plcData.push(data[i].floor3Count);
			}
			console.log(plcData);
			//variables for how the chart should look
			var chartdata = {
				labels: ['floor1', 'floor2', 'floor3'],
				datasets: [
					{
						data: plcData, //3 values [x,y,z]
            			borderWidth: 1,
            			backgroundColor:['#36a2eb', '#ff6384']
					}
				]
			};

			var ctx = document.getElementById('requestedFloorChart').getContext('2d');
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