function display(number) {
    document.getElementById("output").value = document.getElementById("output").value+number
}

function cleardisplay(){
    document.getElementById("output").value=" "
}

function multi() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("output").value =  result;
}
