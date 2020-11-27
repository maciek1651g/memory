<?php

	$conn = new mysqli("localhost","root","", "ao_projekt1");

	if($conn->connect_error)
	{
		http_response_code(404);
		echo "<p>Nie udało się połączyć z bazą dabych</p>";
		die();
	}
	
	
	$sql = "select * from wyniki";
	$wynik = $conn->query($sql);
	$doZwrotu = [];
	
	if($wynik->num_rows>0)
	{
		$i = 0;
		while($linia=$wynik->fetch_assoc())
		{
			$doZwrotu[$i][0] = $linia['id'];
			$doZwrotu[$i][1] = $linia['nick'];
			$doZwrotu[$i][2] = $linia['tryb'];
			$doZwrotu[$i][3] = $linia['trudnosc'];
			$doZwrotu[$i][4] = $linia['czas'];
			$i++;
		}
	}
	echo json_encode($doZwrotu);
	$conn->close();
?>