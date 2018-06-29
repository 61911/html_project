function submitAnswer()
{
	var total = 5;
	var score = 0;
	
	//user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	
	
	//validation
	for(i = 1; i <= total; i++)
	{
	   if(eval('q'+i) == null || eval('q'+i) == '')
	   {
		  alert('You Missed Question '+ i);
		  return false;
 		
     	}
	}
	
	//correct answer
	var answer = ["a","a","d","b","d"];
	
	//check for correct answer
        for(i = 1;i <= answer.length; i++)
		{
	       if(eval('q'+i) == answer[i - 1])
	         {
		         score++;
          	}
		}
	
	 var results = document.getElementById('results');
    results.innerHTML = '<h3> Your score is <span>'+score+'</span> out of <span>'+total+'</span></h3>';
    //	alert('your score is' +score+' out of'+total);
		return false;
} 