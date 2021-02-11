document.getElementById("display-button").addEventListener("click",myFunction)
//Below is a function to create an alert, and Above is the thing that explains it  
function myFunction() {
  alert("Hello There");
}
function myWallpaper() {
  document.body.style.backgroundColor = "red";
}
//Above is a function to change the background to red, below is one to change the "I am" button to "Another one"
function button2() {
  document.getElementById("button").innerHTML = "Another one";
}
//Below is a function that adds my name to the page on activation
function myButton() {
  document.getElementById("Name").innerHTML = "Lukas Johns";
}