let userinfo = document.querySelector("#userinfo")
let userdata = document.querySelector("#user")
let links = document.querySelector(".twolinks")

if( localStorage.getItem("first")){

    links.remove()
    userinfo.style.display = "block"
    userdata.innerHTML = localStorage.getItem("first") +" "+ localStorage.getItem("last")
}