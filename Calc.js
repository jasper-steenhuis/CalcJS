var input = document.getElementById("screen-content");
var numbers = document.querySelectorAll(".keys-container button");
var operator = document.querySelectorAll(".symbols button");
input.innerHTML = " ";
for(var i=0; i<numbers.length; i++){
    var str = " ";

    str = numbers[i].innerHTML;

    numbers[i].addEventListener("click",function(e){
        var currentString = input.innerHTML;
        input.innerHTML += e.target.innerHTML;
    });

}