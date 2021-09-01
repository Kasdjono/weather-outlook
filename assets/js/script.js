/* ------ saved city names ------*/
// var searchByCityEl = $('.history');
// var searchHistoryEl = $('.')

/* ------ search button ------ */
var submitButton = $('.submitButton');

/*** ------ Weather Information Section ------ */
var latData;
var lonData;
var cityInput;

var currCity = $('.currCity');
var dispDay0 = $('.dispDay0');
var dispDay1 = $('.dispDay1');
var dispDay2 = $('.dispDay2');
var dispDay3 = $('.dispDay3');
var dispDay4 = $('.dispDay4');
var dispDay5 = $('.dispDay5');

/*** ------ function for submit button ------ ***/
submitButton.on('click', function () {

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

            /* ------ current date/time display for current forecast ------ */
            var liveTime
            var currTime = moment().format(", dddd, MMMM Do YYYY");
            liveTime = currTime;

            /* ------ For displaying city properly and date/time regardless of user input ------ */
            cityNameDisp = data.city.name;  
            console.log(cityNameDisp);
            currCity.append(cityNameDisp + liveTime);

            /* ------ URL for current/5 day forecast fetch ------ */
            var currOpenWeatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latData + '&lon=' + lonData + '&exclude=minutely,hourly&appid=' + apiKey + "&units=imperial"
            console.log(currOpenWeatherUrl);

            /* ------ fetch for current/5 day forecast ------ */
            fetch(currOpenWeatherUrl)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data);

                    /* ------ display data for current forecast ------ */
                    var iconData = $('<image>');
                    iconData.attr("src",`https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`);
                    iconData.text("icon");
                    dispDay0.append(iconData);

                    var tempData = data.current.temp;
                    var humidityData = data.current.humidity;
                    var windSpeedData = data.current.wind_speed;
                    var uvIndexData = data.current.uvi;

                    var tempDataEl = $('<p>' + "Temp:  " + tempData + " F" + '<p>');
                    dispDay0.append(tempDataEl);
                    var windSpeedDataEl = $('<p>' + "Wind:  " + windSpeedData + " MPH" + '<p>');
                    dispDay0.append(windSpeedDataEl);
                    var humidityDataEl = $('<p>' + "Humidity:  " + humidityData + " %" + '<p>');
                    dispDay0.append(humidityDataEl);
                    var uvIndexDataEl = $('<p>' + "UV Index:  " + uvIndexData + '<p>');
                    dispDay0.append(uvIndexDataEl);

                    /* ------ display data for 5 day forecast ------ */
                    for (i=0; i < 5; i++) {

                        var dispDayArray = [dispDay1, dispDay2, dispDay3, dispDay4, dispDay5];

                        /* ------ displays date for each day ------ */
                        dateData = moment().add(i+1, 'd');
                        dateData = dateData.format('MM/D/YYYY');   
                        var insertDayEL = $('<p>' + dateData + '<p>');
                        dispDayArray[i].append(insertDayEL);

                        /* ------ displays icon for each day ------ */
                        var iconData = $('<image>');
                        iconData.attr("src",`https://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png`);
                        iconData.text("icon");
                        dispDayArray[i].append(iconData);

                        /* ------ displays data for each day ------ */
                        var tempData = data.daily[i].temp.day;
                        var humidityData = data.daily[i].humidity;
                        var windSpeedData = data.daily[i].wind_speed;
                        var uvIndexData = data.daily[i].uvi;

                        var tempDataEl = $('<p>' + "Temp:  " + tempData + " F" + '<p>');
                        dispDayArray[i].append(tempDataEl);

                        var windSpeedDataEl = $('<p>' + "Wind:  " + windSpeedData + " MPH" + '<p>');
                        dispDayArray[i].append(windSpeedDataEl);

                        var humidityDataEl = $('<p>' + "Humidity:  " + humidityData + " %" + '<p>');
                        dispDayArray[i].append(humidityDataEl);

                        var uvIndexDataEl = $('<p>' + "UV Index:  " + uvIndexData + '<p>');
                        dispDayArray[i].append(uvIndexDataEl);
                                    

                    }
           
                })
        })
    
})

