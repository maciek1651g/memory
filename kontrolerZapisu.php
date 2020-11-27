<?php
	if(isset($_GET['nick']) && isset($_GET['czas']) && isset($_GET['tryb']) && isset($_GET['trudnosc']))
	{
		$conn = new mysqli("localhost","root","", "ao_projekt1");

		if($conn->connect_error)
		{
			http_response_code(404);
			echo "<p>Nie udało się połączyć z bazą dabych</p>";
			die();
		}
		
		
		$nick = htmlentities(html_entity_decode($_GET['nick']));
		$czas = htmlentities(html_entity_decode($_GET['czas']));
		$tryb = htmlentities(html_entity_decode($_GET['tryb']));
		$trudnosc = htmlentities(html_entity_decode($_GET['trudnosc']));
		
		$sql = "insert into wyniki(nick,czas,tryb,trudnosc) values('".$nick."','".$czas."','".$tryb."','".$trudnosc."')";
		if (!($conn->query($sql) === TRUE)) 
		{
			http_response_code(502);
			echo '<script type="text/javascript">alert("Nie udało się usunąć rekordu z bazy.");</script>';
		} 
		else
		{
			http_response_code(200);
			echo "zapisano dane";
		}
		
		$conn -> close();
	}
?>