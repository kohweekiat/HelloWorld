var NasaAPIKey = "eG2IiwYgXH1b5VCxB6dQdcu7TfxveSa8HIB5bN7o";
var index = 5;
var output = "Hello World - #";
var a_float = 0.123456789;
var date = new Date();
var today = date.getDay();

var my_array = ["One", "Two", "Three", "Four", "Five","Six"];
var my_array2 = ["Ten", "Twenty", "Thirty", "Forty", "Fifty","Sixty"];
var week_days = ["", "Monday", "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday","Sunday"];

async function callAPI() {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key="+NasaAPIKey);
    var jsonFromApi = await response.json();
    var element = document.getElementById("API");
    var image = document.getElementById("NASA_Image");
    element.setAttribute("p",jsonFromApi["explanation"]);
    image.setAttribute("src",jsonFromApi["url"]);
    console.log(jsonFromApi);
}

function loopArray(in_array) {
    console.log("Calling loop array function... ");

    for(var i = 0; i < in_array.length; i++) {
        console.log(in_array[i]);
    }

    console.log("Loop array function ended");
};

function greetings(output) {
    alert("Today is " +output + "!");
};

loopArray(my_array);
loopArray(my_array2);

greetings(week_days[today]);

for(index; index > 0; index--) {
    console.log(output + my_array[index]);
    console.log(a_float);
};

output = "Good morning :)";

console.log(output); 




