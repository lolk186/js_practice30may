function checkGuess(){
    let input = document.getElementById("guessInput").value
    let result = document.getElementById("result")
    var a = +input +  +Math.floor(Math.random() * 21)
    var b = Math.floor(Math.random() * 10) + a
    if(b==input){
        result.innerHTML ="я угадал а ты лох"

    }else{
        result.innerHTML = "не фартит сегодня"
    }
    console.log(input)
    console.log(b)


}