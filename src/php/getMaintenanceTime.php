<?php
	require("credentials.php");
	//setting header to json
	header('Content-Type: application/json');
  // Opens a connection to a MySQL server 
  $connection = mysqli_connect($host, $username, $password, $database , 3306);


  if (!$connection) { 
    die('Not connected : ' . mysqli_error());
  }
	//query to get data from the table
  	/*
	$query = ("SELECT Sites.Stream , AVG(Chlorophyll) AS `Chlorophyll` FROM Sites
	INNER JOIN UserData ON Sites.SiteID = UserData.SiteID 
	GROUP BY Sites.SiteID;");
	*/
	$query = ("SELECT maintenanceTime , runningTime FROM elevatorData;");

	$result = mysqli_query($connection , $query);
  
  if (!$result) {
    die('Invalid query: ' . mysqli_error());
  }

	//loop through the returned data
	$data = array();
	
	foreach ($result as $row) {
		$data[] = $row;
	}

	//now print the data
	print json_encode($data);
?>