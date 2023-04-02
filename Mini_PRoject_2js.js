  let weather = {
    apiKey: "104ac5202c9850d71abf9f5570db6c31",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");

          }
          return response.json();

        })
        .then((data) => this.displayWeather(data));

    },
    //const
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;

      //document.queryselector
      //city
      document.querySelector(".city").innerText = "Weather in " + name;

      //icon
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";

      //descr.
      document.querySelector(".description").innerText = description;

      //temperature
      document.querySelector(".temp").innerText = temp + "°C";

      //humidity
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";

      //wind
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";

      //weather
      document.querySelector(".weather");//.classList.remove("loading");

      //background
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";


    //search function    
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  

  //document queryselector search button
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();

    //document getElementById srch
    var clr = document.getElementById("srch");
    if (clr.value != "") {
      clr.value = "";
    }
  });
  

  //document query selector search bar and keyup
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });

    //featch weather rewa
  
  weather.fetchWeather("Rewa");