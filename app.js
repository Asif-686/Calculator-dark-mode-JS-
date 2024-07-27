const checkbox = document.querySelector("input[name=darkmode]");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("calculator__output").style.background =
      "hsl(207, 19%, 61%)";
    document.getElementById("calculator__keys").style.background =
      "hsl(207, 19%, 61%)";
    var buttons = document.getElementsByClassName("calculator__key");
    for (let button of buttons) {
      button.style.background = "hsl(206, 14%, 41%)";
      button.style.color = "hsl(255, 100%, 100%)";
    }
    document.getElementById("enter").style.background = "hsl(357, 100%, 72%)";
    document.getElementById("toggle").style.background = "hsl(207, 19%, 61%)"
    
  } else {
    document.getElementById("calculator__output").style.background =
      "hsl(255, 100%, 100%)";
    document.getElementById("calculator__keys").style.background =
      "hsl(255, 100%, 100%)";
    var buttons = document.getElementsByClassName("calculator__key");
    for (let button of buttons) {
      button.style.background = "hsl(210, 25%, 95%)";
      button.style.color = "hsl(202, 11%, 29%)";
    }
    document.getElementById("enter").style.background = "hsl(357, 100%, 72%)";
    document.getElementById("toggle").style.background = "hsl(255, 100%, 100%)"
  }
});
var display = '';
var flag = 0;

var displayResult = '';
function takeValueOnScreen(number) {
  if (number == 'C' && display.length > 0){
    
      display = display.slice(0,-1);
  }
  else if(number == 'AC'){
    display ='';
  }
  
  else if (number == '=' ){
    displayResult = calculate (display);
    display = '';
    flag=1;
  }
  else{
    display += number
  }
  showDisplay(display,displayResult);
}
function showDisplay(content,result){
  if(flag){
    document.getElementById("calculator__output").innerText = result;
    flag = 0;
  }
  else if (content){
    document.getElementById("calculator__output").innerText = content;
  }
  else{
    document.getElementById("calculator__output").innerText = '0';
  }
}
function calculate(expression) {
  try {
    let result = math.evaluate(expression).toString();
    return result;
    
} catch (error) {
    return "invalid expression"
}
}