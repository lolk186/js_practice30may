function toggleText(){
    if(document.getElementById("checkbox").checked == true){
        document.getElementById("text").hidden = true
    }
    else{
        document.getElementById("text").hidden = false

    }
    console.log(document.getElementById("checkbox").checked)
}