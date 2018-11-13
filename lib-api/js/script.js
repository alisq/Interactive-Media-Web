


$apiURL="https://api.openweathermap.org/data/2.5/forecast?q=Toronto,CA&appid=86427290a57af565bdbc10f5d75b2220";




$.ajax ({
        url: $apiURL,
        datatype: "json",
        success: function (e) {
            // Success callback
            alert("sucess");
        }})

$speed = 200



$("#section1").click(function(){
	$(window).scrollTo("#section2",$speed);
})




$("#section2").click(function(){
	$(window).scrollTo("#section3",$speed);
})




$("#section3").click(function(){
	$(window).scrollTo("#section1",$speed);
})