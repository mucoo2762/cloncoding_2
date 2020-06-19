'use strict';

const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = 'b8ca631cabd6155a38fc9511df30eb5e';


function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temp}℃ @ ${place}`;
    });
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };

    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    getWeather(latitude, longitude);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,
        () => console.log("Geo handle error!")
    );
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null){
        askForCoords();
    }else{
        const coordsObj = JSON.parse(loadedCoords);
        getWeather(coordsObj.latitude, coordsObj.longitude);
    }
}

function init(){
    loadCoords();
}

init();