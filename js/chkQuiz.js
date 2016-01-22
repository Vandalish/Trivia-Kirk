/**
   Author: Robert Kirk
   Created: 1/21/2016
   Last Updated: 
**/

function chkQuiz()
{
	var amountCorrect=0;
	var amountWrong=0;
	var score;
	for(i=1; i<10; i++)
	{
		var choices=document.getElementsByName('q'+i);
			for(j=0; j<choices.length; j++)
			{
				var selection=choices[j];
				if(selection.value=="correct" && selection.checked)
				{
					amountCorrect++
				}
				else if(selection.value=="wrong" && selection.checked)
				{
					amountWrong++
				}
			}
	}
	var score=amountCorrect-amountWrong;
	window.alert("You got "+score+" point(s)!");
}