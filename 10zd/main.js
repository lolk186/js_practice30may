var a = 0
function calculate(){
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value
    let select = document.getElementById("operation")
    let output = document.getElementById("result")
    if(select.value == "add"){
        a = +num1 + +num2
        output.innerHTML = a
        a=0
    }else if(select.value == "subtract"){
        a = +num1 - +num2
        output.innerHTML = a
        a=0
    }else if(select.value == "multiply"){
        a = +num1 * +num2
        output.innerHTML = a
        a=0
    }else if(select.value == "divide"){
        if(num2 == 0){
            output.innerHTML = "нельзя делить на 0"
        }else{
            a = +num1 / +num2
            output.innerHTML = a
            a=0
        }
    }
}
