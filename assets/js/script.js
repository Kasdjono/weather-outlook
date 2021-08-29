/* ------ saved city names ------*/
var savedCityInput = $('.citySaved');

/* ------ search button ------ */
var submitButton = $('.submitButton');

var latData;
var lonData;
var cityInput;
var dateData_1;
var tempData_1;
var humidityData_1;
var windSpeedData_1;
var uvIndexData_1;
var cityNameDisp;



/*** ------ function for submit button ------ ***/
submitButton.on('click', function () {

    /* ------ saving searches in local storage ------ */
    // cityInput = cityInput.val();
    // savedCityInput.push(cityInput);
    // localStorage.setItem("city",JSON.stringify(savedCityInput));

    /* ------ city name input ------*/
    var cityInput = $('.cityInput');
    cityInput = cityInput.val();
    console.log(cityInput);

    /* ------ active API Key ------ */
    var apiKey = "e6e814678fbf6b1aadbbcf2851cb710c";
    console.log(apiKey);

    /* ------ URL for lon/lat fetch ------ */
    var openWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&appid=' + apiKey + "&units=imperial"
    console.log(cityInput);
    console.log(openWeatherUrl);

    /* ------ fetch for lon/lat ------ */
    fetch(openWeatherUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);

            /* ------ lat/lon for current weather fetch() ------ */
            latData = data.city.coord.lat;
            lonData = data.city.coord.lon;
            console.log(latData);
            console.log(lonData);
            cityNameDisp = data.city.name;
            console.log(cityDisp);

            /* ------ URL for current/5 day forecast fetch ------ */
            var curropenWeatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latData + '&lon=' + lonData + '&exclude=minutely,hourly&appid=' + apiKey + "&units=imperial"
            console.log(curropenWeatherUrl);
        
            /* ------ fetch for current/5 day forecast ------ */
            fetch(curropenWeatherUrl)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data);

                    /* ------ collect data for current forecast ------ */


                    // var icon = data.daily.weather.icon;
                    // console.log(icon);
                    var alert1 = data.alerts[0].event;
                    console.log(alert1);


                    /* ------ future 5 day forecast ------ */


                })
        })

})





// var cityInput_2;
// var dateData_2;
// var tempData_2;
// var humidityData_2;
// var windSpeedData_2;
// var uvIndexData_2;

// var cityInput_3;
// var dateData_3;
// var tempData_3;
// var humidityData_3;
// var windSpeedData_3;
// var uvIndexData_3;

// var cityInput_4;
// var dateData_4;
// var tempData_4;
// var humidityData_4;
// var windSpeedData_4;
// var uvIndexData_4;

// var cityInput_5;
// var dateData_5;
// var tempData_5;
// var humidityData_5;
// var windSpeedData_5;
// var uvIndexData_5;