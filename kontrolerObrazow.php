<?php
	if(isset($_GET['ile']))
	{
		//$sciezkaDoObrazow = "http://aoprojekt.cba.pl/obrazy/";
		$sciezkaDoObrazow = "./obrazy/";
		$ile = (int)$_GET['ile'];
		
		$pliki = scandir($sciezkaDoObrazow);
		$len = count($pliki);
		unset($pliki[0]);
		unset($pliki[1]);
		$tab = [];
		
		for($i=0;$i<$ile;$i++)
		{
			do
			{
				$tmp = rand(0,$len);
			}
			while(!isset($pliki[$tmp]));

			$tab[$i] = $sciezkaDoObrazow.$pliki[$tmp];
			unset($pliki[$tmp]);
		}
		
		echo json_encode($tab);
	}
?>