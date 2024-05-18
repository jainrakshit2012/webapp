const iconElement=document.querySelector('.weather-icon')
const locationIcon=document.querySelector('.location-icon')
const tempElement=document.querySelector('.temprature-value p')
const descElement=document.querySelector('.temprature-description p')
const locationElement=document.querySelector('.location p')
const notificationElement=document.querySelector('.notification')

var input= document.getElementById('search')

let city=''
let latitude=0.0
let longitude=0.0
input.addEventListener('keyup',function(event){
    if(event.keyCode ===13){
        event.preventDefault()
        city=input.value
        console.log(city);
    }
})
const weather={}
weather.temprature={
    unit:"celsius"
}
const KELVIN=273
const key='d54ab0f54be884522d8fdfb429db6692'
if(Geolocation in navigator){
    navigator.Geolocation.getCurrentPosition(setPosition,showError)
}else{
    notificationElement.computedStyleMap.display='block'
    notificationElement.innerHTML='<p>Browser doesnt supprt location</p>'
}
function setPosition(position){
latitude=position.coords.latitude
longitude=position.coords.longitude
getWeather(latitude,longitude)
}
function showError(error){
notificationElement.style.display='block'
notificationElement.innerHTML=`<p>${error.message}</p>`
}
locationIcon.addEventListener('click',function(event){
    console.log('clicked');
    getWeather(latitude,longitude)
})
function getWeather(latitude,longitude){
let api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`

fetch(api).then(function(response){
    let data=response.json()
    console.log(data);
})

}
function diplayweather(){
    iconElement.innerHTML=<img src='icons/$(weather.iconId).png'></img>
    
}