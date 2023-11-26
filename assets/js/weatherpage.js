// import dayjs from "dayjs";


dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);


var searchFormEl = document.querySelector('#submit');
var cityInputEl = document.querySelector('#user-input-city');

// var weatherContainEl = document.querySelector('#weather-display');

var city = localStorage.getItem("user-input-city")


var checkWeather = function(event) {
    event.preventDefault()

    
    var cityName = cityInputEl.value.trim();


    var apiKey = "510113c655e48e0d72d50c9e90962f9d";

    // var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;




// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

    var apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="+ cityName + "&appid=" + apiKey;

    


    fetch(apiURL + `&appid=${apiKey}`)
     .then(function (response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);


                document.querySelector('.city').innerHTML = data.name;
                document.querySelector('.currentTemp').innerHTML = data.main.temp;
                document.querySelector('.currentWind').innerHTML = data.wind.speed;
                document.querySelector('.currentHumidity').innerHTML = data.main.humidity;
            });
        }
     });





     
    var apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q="+ cityName + "&appid=" + apiKey;

    
    // var apiURL2 = "http://api.openweathermap.org/geo/1.0/direct?q=" + data.cityName.coord + "&appid=" , apiKey;

    // var apiURL2 = "http://api.openweathermap.org/geo/1.0/weather?units=imperial&q=" + cityName + "&appid=" apiKey;
    // 
    // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

    


    fetch(apiURL2 + `&appid=${apiKey}`)
     .then(function (response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);


                document.querySelector('.foreTempOne').innerHTML = data.list[0].main.temp;
                document.querySelector('.foreWindOne').innerHTML = data.list[0].wind.speed;
                document.querySelector('.foreHumidOne').innerHTML = data.list[0].main.humidity;

                document.querySelector('.foreTempTwo').innerHTML = data.list[1].main.temp;
                document.querySelector('.foreWindTwo').innerHTML = data.list[1].wind.speed;
                document.querySelector('.foreHumidTwo').innerHTML = data.list[1].main.humidity;

                document.querySelector('.foreTempThree').innerHTML = data.list[2].main.temp;
                document.querySelector('.foreWindThree').innerHTML = data.list[2].wind.speed;
                document.querySelector('.foreHumidThree').innerHTML = data.list[2].main.humidity;

                document.querySelector('.foreTempFour').innerHTML = data.list[3].main.temp;
                document.querySelector('.foreWindFour').innerHTML = data.list[3].wind.speed;
                document.querySelector('.foreHumidFour').innerHTML = data.list[3].main.humidity;

                document.querySelector('.foreTempFive').innerHTML = data.list[4].main.temp;
                document.querySelector('.foreWindFive').innerHTML = data.list[4].wind.speed;
                document.querySelector('.foreHumidFive').innerHTML = data.list[4].main.humidity;
            });
        }
     });





    //  var apiURL2 = "api.openweathermap.org/data/2.5/forecast?lat=" + data.coord[1] + "&lon=" + data.coord[0] + "&appid=" + apiKey;


    // // var apiURL2 = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + apiKey;


    //  fetch(apiURL2 + `&appid=${apiKey}`)
    //  .then(function (response) {
    //     if (response.ok) {
    //         response.json().then(function(data) {
    //             console.log(data);


    //             // document.querySelector('.currentTemp').innerHTML = data.main.temp;
    //         });
    //     }
    //  });
};




searchFormEl.addEventListener('click', checkWeather);

if(checkWeather == true) {
    localStorage.setItem("user-input-city" , city)
};




// var today = require("dayjs") for import
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm A'));




// var checkWeather = function(event) {
//     event.preventDefault();

//     var cityName = cityInputEl.value.trim();
//     var apiKey = "510113c655e48e0d72d50c9e90962f9d";
//     var apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="+ cityName + "&appid=" + apiKey;

//     fetch(apiURL)
//      .then(function (response) {
//         if (response.ok) {
//             response.json().then(function(data) {
//                 ... more code here

//                 var apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + apiKey;

//                 fetch(apiURL2)
//                  .then(function (response) {
//                     if (response.ok) {
//                         response.json().then(function(data) {
//                             ...more code here
//                         });
//                     }
//                  });
//             });
//         }
//      });
// };





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

