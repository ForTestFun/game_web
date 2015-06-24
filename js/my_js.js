function canvas_draw_line()
{
	var c=document.getElementById("my_canvas");
	var cxt=c.getContext("2d");
	cxt.moveTo(0,0);
	cxt.lineTo(200,100);
	cxt.stroke();
}

function canvas_draw_circle()
{
	var c=document.getElementById("my_canvas");
	var cxt=c.getContext("2d");
	cxt.fillStyle="#FF0000";
	cxt.beginPath();
	cxt.arc(70,18,15,0,Math.PI*2,true);
	cxt.closePath();
	cxt.fill();
}

function localStorage_func()
{
	if (localStorage.my_count)
	{
	  localStorage.my_count=Number(localStorage.my_count) +1;
	}
	else
	{
	  localStorage.my_count=1;
	}
	my_log("Visits "+ localStorage.my_count + " time(s).");
}

function sessionStorage_func()
{
	if (sessionStorage.my_count)
	{
	  sessionStorage.my_count=Number(sessionStorage.my_count) +1;
	}
	else
	{
	  sessionStorage.my_count=1;
	}
	my_log("Visits "+ sessionStorage.my_count + " time(s).");
}

function do_main()
{
	canvas_draw_line();
	canvas_draw_circle();
	localStorage_func();
	sessionStorage_func();
}

do_main();