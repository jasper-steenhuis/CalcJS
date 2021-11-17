let arr = ["one", "two", "three"];
function getMultipleElements(arr){
    for(i=0; i<arr.length; i++){
        console.log(document.getElementById(arr[i]));
    }
}
getMultipleElements(arr);