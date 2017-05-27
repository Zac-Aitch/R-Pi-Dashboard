<script type="text/javascript">

			

function updateWeather(){
  $.ajax({
  url : "http://api.wunderground.com/api/e9fecf1aaf8a4e54/conditions/q/CA/San_Francisco.json",
  dataType : "jsonp",
  success: function(pjson) {
  var feels = pjson['current_observation']['feelslike_f'];
  var weather = pjson['current_observation']['weather'];

  $('#grid').html(feels + "\n" + weather);
  	} 
  });

  setInterval(updateWeather, 600000);
  updateWeather();
}
			
			

function updateTime(){
	var optionsTime = {hour: 'numeric', minute: 'numeric'};
	var t = new Date();
	var m = t.toLocaleString('en-US', optionsTime);
	document.getElementById("greetTime").innerHTML = m;

	setInterval(updateTime, 100);
	updateTime();
}
		
	
		
function updateDay(){
	var optionsDay = {weekday: 'long'};
	var d = new Date();
	var n = d.toLocaleString('en-US', optionsDay);
	
	document.getElementById("greet").innerHTML = n;
	
	setInterval(updateDay, 60000);
	 updateDay();
	}
		
		
function updateMonth(){
	var optionsMonth = {month: 'long', day: 'numeric'};
	var d = new Date();
	var m = d.toLocaleString('en-US', optionsMonth);	
	document.getElementById("greetMonth").innerHTML = m;
	
	setInterval(updateMonth, 60000);
	updateMonth();
}	
			
	

					
function updateTime(){
	$.ajax({
	url : "http://webservices.nextbus.com/service/publicXMLFeed?command=predictions&a=sf-muni&r=1&s=3840",
	dataType : "xml",
	success: function(data) {
		
		var x = data.getElementsByTagName("prediction")[0];
		var txt = x.getAttribute("minutes");
		console.log(txt);
		document.getElementById("time").innerHTML ="1-California: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + txt + " min";
		
		}
	});
		
		setInterval(updateTime, 3000);
		updateTime();
	}

		</script>
	
	
