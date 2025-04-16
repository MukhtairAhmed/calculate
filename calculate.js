function add(n){
var now = document.getElementById("data");
now.value += n;    
}

function remove(){
var now = document.getElementById("data");
now.value = "";
}


function total(){
var now = document.getElementById("data");
now.value = eval(now.value);
}





