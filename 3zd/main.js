function toggleTheme(){
    let body = document.getElementById("body")
    console.log(body)
    body.removeAttribute("class")
    body.setAttribute("class","dark-mode")
    console.log(body)
}
