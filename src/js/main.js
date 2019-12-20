import Header from "./components/head"
import Nav from "./components/nav"
import Footer from "./components/footer"
import suitUp from "./suitFunctions"

export default () => {
    pageBuild();
}

function pageBuild(){
    startUp()
    head();
    nav();
    navButtons();
    foot();
}

function head(){
    const header = document.getElementById("head")
    header.innerHTML = Header()
}

function nav(){
    const nav = document.getElementById("nav")
    nav.innerHTML = Nav()
}

function navButtons(){
    const home = document.querySelector("#homeButton")
    const lore = document.querySelector("#loreButton")
    const char = document.querySelector("#charButton")
    const world = document.querySelector("#worldButton")
    const app = document.querySelector("#app")

    home.addEventListener("click", function(){
        app.innerHTML= Suit()
    })
}

function foot(){
    const footer = document.getElementById("foot")
    footer.innerHTML = Footer()
}

function startUp(){
    suitUp();
}