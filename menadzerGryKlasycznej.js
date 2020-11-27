class MenadzerGryKlasycznej
{
	static klikniecieWDiva(element)
	{
		if(element.children[0].style.visibility != "visible" && blokada)
		{
			element.children[0].style.visibility = "visible"
			var para = element.attributes[2].value
			if(poprzedniPara!=0)
			{
				blokada = false
				if(poprzedniPara==para)
				{
					licznik++
					poprzedniObiekt.onclick=""
					element.onclick=""
					if(licznik==menago.liczbaPar)
					{
						clearInterval(stoper)
						setTimeout(MenadzerGry.wygrana , 20);
						document.getElementById("start_stop").value = "Start"
						document.getElementById("start_stop").onclick = MenadzerGry.RozpocznijGre
						licznik=0
					}
					
					poprzedniObiekt=0
					poprzedniPara=0
					blokada=true
				}
				else
				{
					var f = function() {
						poprzedniObiekt.children[0].style.visibility = "hidden";
						element.children[0].style.visibility = "hidden";
						poprzedniObiekt=0
						poprzedniPara=0
						blokada=true
					}
					
					setTimeout(f , 300);
				}
				
			}
			else
			{
				poprzedniObiekt = element
				poprzedniPara = para
			}
		}
	}
}





