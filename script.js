var searchInput = $("#search-text");
var displayEl = $(".search-list");
var searchText ="";
// enter a search
// build an array of citys
// push new city into array
// display city in list
// local storage
var btn = $(".search-btn");
var cities = [];

function displaySearchCity() {

    searchText = searchInput.val();
    cities.push(searchText);
}
// on click event to get city 

btn.on("click", function (event) {
    displayEl.empty();
    
    event.preventDefault();
    displaySearchCity();
   searchInput.val("");
    

    for (var i = 0; i < cities.length; i++) {
        var currentCity = cities[i];
        var cityListBtn = $("<button>").text(currentCity);
        cityListBtn.addClass("btn btn-lg btn-block btn-outline-dark");
        displayEl.append(cityListBtn);
        localStorage.setItem("cities", cities);


    }
});




// var city = $(this).attr("data-city");
var city = "austin";
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=36edb26270cfd8ba7f33ada2c6f55cab&units=imperial";
$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function (response) {
    var cityDiv = $(".city");
    cityDiv.text(" Weather Details:" + response.main.name);
    $(".temp").text("Temprature: " + response.main.temp);
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".uvIndex").text("UV Index: " + response.main.uvindex);
    // build a h1, append div, displays city name date and weather icon
    // build a p, append div displays temp

    // build a p, append div displays wind speed

    // build a p, append div displays uv index

});


// var fiveDayQueryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=36edb26270cfd8ba7f33ada2c6f55cab&units=imperial";
// $.ajax({
//     url: fiveDayQueryUrl,
//     method: "GET"
// }).then(function (response) {
//     //    gets 5 day current weather
//     var forecastEl = $(".five-day-forecast");
//     forecastEl.text(" 5-Day Forecast" );
//     var fiveDay = [];
//     console.log(response.list);
//     for (var i = 0; i < response.list.length; i++) {
//         if (i % 8 === 0) {
//             fiveDay.push(response.list[i]);
//         }
//         // create 5 day header
//         // display date, weather icon, temp, and humidity per day
//     }


//     //    display weather icon under weather [0].icon
//     // img<src=http://openweathermap.org/img/w/01d.png>
// });