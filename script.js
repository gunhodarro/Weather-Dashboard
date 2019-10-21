var APIKey = "3a6081cbd2d11c20abbb5dac8c0c6455";
var APIKey2 = "166a433c57516f51dfab1f7edaed8413";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Denver,us&units=imperial&APPID=" + APIKey;


$.ajax({
  url: queryURL,
  method: "GET"
})
 
  
  
  .then(function(response) {
    // console.log(queryURL);
    // console.log(response.weather);
  $(".city").text("City: " + response.name);
 const actualDay = moment().format("MMM Do YY");
 $(".date").text("Date: " + actualDay);
 $(".icon-image").append($("<img>", {class:"icon-image", src:"http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png"}));
 $(".temperature").text("Temperature (F) " + response.main.temp);
 $(".humidity").text("Humidity: " + response.main.humidity);
 $(".wind-speed").text("Wind Speed: " + response.wind.speed);
//  $(".uv-index").text("UV Index: " + response.)
});
var queryURL3 = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + userInput + ",us&units=imperial&APPID=" + APIKey2;
var userInput = $(".form-control").val();
 $.ajax({
    url: queryURL3,
    method: "GET"
  })
  .then(function(response) {

  
$(".date1").html(moment().add(1, "day").format("MMM Do YYYY"));
$(".date2").html(moment().add(2, "day").format("MMM Do YYYY"));
$(".date3").html(moment().add(3, "day").format("MMM Do YYYY"));
$(".date4").html(moment().add(4, "day").format("MMM Do YYYY"));
$(".date5").html(moment().add(5, "day").format("MMM Do YYYY"));
$(".icon1").empty();
$(".icon1").append($("<img>", {class:"icon", src:"http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png"}));
$(".icon2").empty();
$(".icon2").append($("<img>", {class:"icon", src:"http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png"}));
$(".icon3").empty();
$(".icon3").append($("<img>", {class:"icon", src:"http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png"}));
$(".icon4").empty();
$(".icon4").append($("<img>", {class:"icon", src:"http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png"}));
$(".icon5").empty();
$(".icon5").append($("<img>", {class:"icon", src:"http://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png"}));
$(".temp1").text("Temperature (F) " + response.list[1].temp.day);
$(".temp2").text("Temperature (F) " + response.list[2].temp.day);
$(".temp3").text("Temperature (F) " + response.list[3].temp.day);
$(".temp4").text("Temperature (F) " + response.list[4].temp.day);
$(".temp5").text("Temperature (F) " + response.list[5].temp.day);
$(".humidity1").text("Humidity: " + response.list[1].humidity);
$(".humidity2").text("Humidity: " + response.list[2].humidity);
$(".humidity3").text("Humidity: " + response.list[3].humidity);
$(".humidity4").text("Humidity: " + response.list[4].humidity);
$(".humidity5").text("Humidity: " + response.list[5].humidity);
});


var searchButton = $(".btn");
 

$(".btn").on("click", function(event) {
  event.preventDefault();
  // console.log(this);
  var userInput = $(".form-control").val();
  // console.log(userInput);
  var queryURL2 = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + ",us&units=imperial&APPID=" + APIKey;
  $(".list-group").prepend("<br><hr>" + userInput);
  $.ajax({
    url: queryURL2,
    method: "GET"
  })
  .then(function(response) {
    // console.log(queryURL2);
    // console.log(response.weather);

 $(".city").text("City: " + response.name);
 const actualDay = moment().format("MMM Do YY");
 $(".date").text("Date: " + actualDay);
 $(".icon-image").empty();
 $(".icon-image").append($("<img>", {class:"icon-image", src:"http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png"}));
 $(".temperature").text("Temperature (F) " + response.main.temp);
 $(".humidity").text("Humidity: " + response.main.humidity);
 $(".wind-speed").text("Wind Speed: " + response.wind.speed);
//  $(".uv-index").text("UV Index: " + response.)


});

fiveDay();

function fiveDay () {
  console.log('hello');
 var queryURL3 = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + userInput + ",us&units=imperial&APPID=" + APIKey2;
 
 $.ajax({
   url: queryURL3,
   method: "GET"
 })
 .then(function(response) {
   console.log(queryURL3);
   console.log(response);
   $(".date1").html(moment().add(1, "day").format("MMM Do YYYY"));
   $(".date2").html(moment().add(2, "day").format("MMM Do YYYY"));
   $(".date3").html(moment().add(3, "day").format("MMM Do YYYY"));
   $(".date4").html(moment().add(4, "day").format("MMM Do YYYY"));
   $(".date5").html(moment().add(5, "day").format("MMM Do YYYY"));
   $(".icon1").empty();
   $(".icon1").append($("<img>", {class:"icon", src:"http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png"}));
   $(".icon2").empty();
   $(".icon2").append($("<img>", {class:"icon", src:"http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png"}));
   $(".icon3").empty();
   $(".icon3").append($("<img>", {class:"icon", src:"http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png"}));
   $(".icon4").empty();
   $(".icon4").append($("<img>", {class:"icon", src:"http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png"}));
   $(".icon5").empty();
   $(".icon5").append($("<img>", {class:"icon", src:"http://openweathermap.org/img/wn/" + response.list[5].weather[0].icon + "@2x.png"}));
   $(".temp1").text("Temperature (F) " + response.list[1].temp.day);
   $(".temp2").text("Temperature (F) " + response.list[2].temp.day);
   $(".temp3").text("Temperature (F) " + response.list[3].temp.day);
   $(".temp4").text("Temperature (F) " + response.list[4].temp.day);
   $(".temp5").text("Temperature (F) " + response.list[5].temp.day);
   $(".humidity1").text("Humidity: " + response.list[1].humidity);
   $(".humidity2").text("Humidity: " + response.list[2].humidity);
   $(".humidity3").text("Humidity: " + response.list[3].humidity);
   $(".humidity4").text("Humidity: " + response.list[4].humidity);
   $(".humidity5").text("Humidity: " + response.list[5].humidity);
   
   });
   
   }
   });










