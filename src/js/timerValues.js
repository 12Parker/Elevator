
function displayTimerValues() {
//JQuery function; checks when document is finished loading
$(document).ready(function() {
	$.ajax({
		//Using ajax so we can use php variables in js.
		url : "../../src/php/getMaintenanceTime.php",
		type : "GET",
		success : function(data) {
			var plcData = [];
			//Create js arrays based on php output
			for(var i in data) {
				console.log(data);

				var newMaintenanceTime = (data[i].maintenanceTime / 1000);
				plcData.push(newMaintenanceTime);

				var newRunningTime = (data[i].runningTime / 1000);
				plcData.push(newRunningTime);
			}
			console.log(plcData);
			var maintenanceTime = document.getElementById('totalMaintenanceTimer');
			maintenanceTime.innerHTML = plcData[0];
			maintenanceTime.innerHTML += ' Seconds';
			var runningTime = document.getElementById('totalRunningTimer');
			runningTime.innerHTML = plcData[1];
			runningTime.innerHTML += ' Seconds';
		},
		error : function(data) {

		}
	});
});
}