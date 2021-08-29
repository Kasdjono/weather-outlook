/* ------ saved city names ------*/
var savedCityInput = $('.citySaved');

/* ------ search button ------ */
var submitButton = $('.submitButton');

var latData;
var lonData;
var cityInput;

var dispDay0 = $('.dispDay0');
var dispDay1 = $('.dispDay1');
var dispDay2 = $('.dispDay2');
var dispDay3 = $('.dispDay3');
var dispDay4 = $('.dispDay4');
var dispDay5 = $('.dispDay5');

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
            cityNameDisp = data.city.name;  // For displaying city properly regardless of user input
            console.log(cityNameDisp);

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

                    /* ------ collect data for current/5 day forecast ------ */
                    for (i=0; i < 6; i++) {

                        var dayData = {
                            tempData:"",
                            humidityData:"",
                            windSpeedData:"",
                            uvIndexData:""
                        };
                    
                        dayData.tempData = data.daily[i].temp.day;
                        dayData.humidityData = data.daily[i].humidity;
                        dayData.windSpeedData = data.daily[i].wind_speed;
                        dayData.uvIndexData = data.daily[i].uvi;
                        console.log(dayData);
                        
                        var dispDayArray = [dispDay0, dispDay1, dispDay2, dispDay3, dispDay4, dispDay5];

                        var tempDataEl = $('<p>' + "Temp:  " + dayData.tempData + " F" + '<p>');
                        dispDayArray[i].append(tempDataEl);

                        var windSpeedDataEl = $('<p>' + "Wind:  " + dayData.windSpeedData + " MPH" + '<p>');
                        dispDayArray[i].append(windSpeedDataEl);

                        var humidityDataEl = $('<p>' + "Humidity:  " + dayData.humidityData + " %" + '<p>');
                        dispDayArray[i].append(humidityDataEl);

                        var uvIndexDataEl = $('<p>' + "UV Index:  " + dayData.uvIndexData + '<p>');
                        dispDayArray[i].append(uvIndexDataEl);

                                    

                    }

                    
                
                

                


                })
        })
    
})


                   

                    // arrayDate[i] = $('<p>');
                    // arrayDate[i].text(humidityData);

                    // arrayDate[i] = $('<p>');
                    // arrayDate[i].text(windSpeedData);

                    // arrayDate[i] = $('<p>');
                    // arrayDate[i].text(uvIndexData);



                    // else {
                       
                    // }
                     
 
                    // var dateData;
                    // console.log(dateData);
                    // var icon = data.daily.weather.icon;
                    // console.log(icon);
                    // var alert1 = data.alerts[0].event;
                    // console.log(alert1);

                    
                    /* ------ passing forcast data to html file ------ */

