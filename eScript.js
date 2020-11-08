let unit=document.getElementById('tunits');

function resetText()
{
	unit.value=0;
	console.log('value cleared');
}
function eBillCal()
{
	let unit=Number(document.getElementById('unit').value);
	
	var uRate,fRate,total;
	if(unit<=58)
	{
		
		if(unit>=30)
		{
		    fRate =60;
			uRate=29*2.5+((unit-29)*4.85);
			total=uRate+fRate;
		}
		else
		{
			fRate=30
			uRate=unit*2.5;
			total=uRate+fRate;
		}
		
	}
	else
	{
		if(unit>=175)
		{
			fRate=540
			uRate=(58*7.85)+(29*10)+(29*27.75)+(58*32)+((unit-174)*45);
			total=uRate+fRate;
		}
		else if(unit<=174 && unit>=117)
		{
			fRate=480;
			uRate=(58*7.85)+(29*10)+(29*27.75)+((unit-116)*32);
			total=uRate+fRate
		}
		else if(unit<=116 && unit>=88 )
		{
			fRate=480;
			uRate=(58*7.85)+(29*10)+((unit-87)*27.75);
			total=uRate+fRate;
		}
		else
		{
			fRate=90;
			uRate=(58*7.85)+((unit-58)*10);
			total=uRate+fRate;
		}
	}
	let result=document.getElementById('calculated');
	result.innerHTML="<p>KWH Charge:  Rs "+uRate+"</p><p>Fixed rate:  Rs "+fRate+"</p>Total: Rs "+total;

}