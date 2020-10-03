var searchInput = $("#search-text");
// enter a search
// build an array of citys
// push new city into array
// display city in list
// local storage

var city = [];
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city+ "&appid=36edb26270cfd8ba7f33ada2c6f55cab&units=imperial";
 $.ajax({
     url: queryUrl,
     method : "GET"
    }).then (function(response){
        console.log(response);
        // build a h1, append div, displays city name date and weather icon
        // build a p, append div displays temp
        // build a p, append div displays wind speed
        // build a p, append div displays uv index
    });


   var fiveDayQueryUrl="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=36edb26270cfd8ba7f33ada2c6f55cab&units=imperial";
   $.ajax({
    url: fiveDayQueryUrl,
    method : "GET"
   }).then (function(response){
    //    gets 5 day current weather
    var fiveDay = [];
       console.log(response.list);
       for (var i=0;i<response.list.length;i++){
            if(i % 8 ===0 ){
                fiveDay.push(response.list[i]);
            }
            // create 5 day header
// display date, weather icon, temp, and humidity per day
       }
     
       
    //    display weather icon under weather [0].icon
    // img<src=http://openweathermap.org/img/w/01d.png>
   });