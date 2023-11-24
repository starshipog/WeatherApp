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





     
    // var apiURL2 = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="+ cityName + "&appid=" + apiKey;

    
    var apiURL2 = "http://api.openweathermap.org/geo/1.0/direct?q=" + data.cityName.coord + "&appid=" , apiKey;

    // var apiURL2 = "http://api.openweathermap.org/geo/1.0/weather?units=imperial&q=" + cityName + "&appid=" apiKey;
    // 
    // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

    


    fetch(apiURL2 + `&appid=${apiKey}`)
     .then(function (response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);


                document.querySelector('.5dayTemp').innerHTML = data.main.temp;
                document.querySelector('.5dayWind').innerHTML = data.wind.speed;
                document.querySelector('.5dayHumidity').innerHTML = data.main.humidity;
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

