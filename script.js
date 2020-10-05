var searchInput = $("#search-text");
var displayEl = $(".search-list");
var searchText = "";
var uvEl = $(".uvIndex");
// enter a search
// build an array of citys
// push new city into array
// display city in list
// local storage
var btn = $(".search-btn");
var cities = [];
var header = $(".forecast-header");
var forecastEl = $(".five-day-forecast");

function displaySearchCity() {

    searchText = searchInput.val();
    cities.push(searchText);
}
// on click event to get city 
function getUvIndex(lat, lon) {
    var queryUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=36edb26270cfd8ba7f33ada2c6f55cab";
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        uvEl.text("UV Index: " + response.value);
        // uv mild 
        if (response.value <= 2) {
            uvEl.css("background-color", "yellow");

        }
        else if (response.value >= 4) {
            // uv moderate
            uvEl.css("background-color", "orange");
        }
        else {
            // uv severe
            uvEl.css("background-color", "red");
        }
    });
}
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

    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=36edb26270cfd8ba7f33ada2c6f55cab&units=imperial";
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        getUvIndex(response.coord.lat, response.coord.lon);
        var cityDiv = $(".city");
        // show city, date, and weather icon 
        // <img src=http://openweathermap.org/img/w/01d.png>
        var weatherIcon = $("<img>");
        cityDiv.text(" Weather Details: " + response.name + response.weather[0].icon);
        $(".humidity").text("Humidity: " + response.main.humidity + " %");
        $(".temp").text("Temprature: " + response.main.temp + " ℉");
        $(".wind").text("Wind Speed: " + response.wind.speed + " MPH")

    });

    var fiveDayQueryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cities + "&appid=36edb26270cfd8ba7f33ada2c6f55cab&units=imperial";
    $.ajax({
        url: fiveDayQueryUrl,
        method: "GET"
    }).then(function (response) {
        //    gets 5 day current weather
        forecastEl.text(" 5-Day Forecast");
        var fiveDay = [];
        var current = {};
        for (var i = 0; i < response.list.length; i++) {
            if (i % 8 === 0) {
                current = response.list[i];
                var date = $("<div>");
                // day1.css("background-color", "blue").text("Temp : " + response.)

                var temp = $("<div>");
                var icon = $("<div>");
                var humidity = $("<div>");
                var forecastDay = $("<div class = 'col'>");
                var card = $("<div class = 'card bg-primary text-white'>");
                var body = $("<div class ='card-body'>");
                $("#forecast").append(forecastDay);
                forecastDay.append(card);
                card.append(body);

console.log(current);
                body.append(date);
                body.append(temp);
                temp.text(current.main.temp + " ℉");
                body.append(icon);
                body.append(humidity);
                humidity.text(current.main.humidity + "%");
                date.text(current.dt_txt);

            }

            
        }

    console.log(fiveDay);
                
            //     //    display weather icon under weather [0].icon
        //     // img<src=http://openweathermap.org/img/w/01d.png>
    });
});
        
    


