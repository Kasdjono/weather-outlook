
/* ------ city name input ------*/
var cityInput = $('.cityInput');
console.log(cityInput);
cityInput = cityInput.val();
console.log(cityInput);
/* ------ saved city names ------*/
var savedCityInput = $('.citySaved');

/* ------ search button ------ */
var submitButton = $('.submitButton')







/*** ------ function for submit button ------ ***/
submitButton.on('click', function() {

    /* ------ saving searches in local storage ------ */
    // cityInput = cityInput.val();
    // savedCityInput.push(cityInput);
    // localStorage.setItem("city",JSON.stringify(savedCityInput));

    var apiKey = e6e814678fbf6b1aadbbcf2851cb710c;
    console.log(apiKey);

    var openWeatherUrl = 'api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&appid=' + apiKey
    console.log(cityInput);
    console.log(openWeatherUrl);

    fetch(openWeatherUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {

        })




})