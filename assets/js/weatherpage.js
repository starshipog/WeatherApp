var searchFormEl = document.querySelector('#submit');
var cityInputEl = document.querySelector('#user-input');

// var weatherContainEl = document.querySelector('#weather-display');




var checkWeather = function(event) {
    event.preventDefault()

    
    var cityName = cityInputEl.value.trim();


    var apiKey = "510113c655e48e0d72d50c9e90962f9d";

    // var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    var apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="+ cityName + "&appid=" + apiKey;


    fetch(apiURL + `&appid=${apiKey}`)
     .then(function (response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);


                document.querySelector('.city').innerHTML = data.name;
                document.querySelector('.currentTemp').innerHTML = data.main.temp;
            });
        }
     });




     var apiURL2 = "api.openweathermap.org/data/2.5/forecast?units=imperial&q="+ cityName + "&appid=" + apiKey;


     fetch(apiURL2 + `&appid=${apiKey}`)
     .then(function (response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);


                // document.querySelector('.5dayTemp').innerHTML = data.main.temp;
            });
        }
     });
};




searchFormEl.addEventListener('click', checkWeather);








// var searchSubmit = function (event) {
//     event.preventDefault();

//     var cityName = cityInputEl.value.trim();

//     if (cityName) {
        
//     }
// };



// var getWeatherData = function (cityName) {
//     var apiKey = "510113c655e48e0d72d50c9e90962f9d";

//     var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

//     fetch(apiURL)
//      .then(function (response) {
//         if (response.ok) {
//             response.json().then(function(data) {
//                 console.log(data);
//             })
//         }
//      })
// }

// getWeatherData();

// var displayWeather = function ()

