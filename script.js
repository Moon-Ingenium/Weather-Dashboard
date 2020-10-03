var searchInput = $("#search-text");
var city = "Austin";
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city+ "&appid=36edb26270cfd8ba7f33ada2c6f55cab&units=imperial";
 $.ajax({
     url: queryUrl,
     method : "GET"
    }).then (function(response){
        console.log(response);
    });


   var fiveDayQueryUrl="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=36edb26270cfd8ba7f33ada2c6f55cab&units=imperial";
   $.ajax({
    url: fiveDayQueryUrl,
    method : "GET"
   }).then (function(response){
    var fiveDay = [];
       console.log(response.list);
       for (var i=0;i<response.list.length;i++){
            if(i % 8 ===0 ){
                fiveDay.push(response.list[i]);
            }

       }
       console.log("fiveDay");
       console.log(fiveDay);
    //    display weather icon under weather [0].icon
    // img<src=http://openweathermap.org/img/w/01d.png>
   });