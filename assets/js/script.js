
/* ------ city name input ------*/
var cityInput = $('.cityInput');

/* ------ saved city names ------*/
var savedCityInput = $('.citySaved');

/* ------ search button ------ */
var submitButton = $('.submitButton')







/*** ------ function for submit button ------ ***/

/* ------ saving searches in local storage ------ */
submitButton.on('click', function() {
    cityInput = cityInput.val();
    savedCityInput.push(cityInput);
    localStorage.setItem("city",JSON.stringify(savedCityInput));

})