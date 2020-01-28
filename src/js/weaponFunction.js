import HeaderW from "./components/headW"
import Header from "./components/head"
import Nav from "./components/nav"
import Weapons from "./components/weapons"
import suitUp from "./suitFunctions"

export default () => {
    displayWeaponry();
    goHomeW();
    rollOver2();
}

function displayWeaponry(){
    const header = document.querySelector("#head")
    const nav = document.querySelector("#nav");
    const app = document.querySelector("#app");

    header.innerHTML = HeaderW();
    nav.innerHTML = Nav();
    app.innerHTML = Weapons();
}
function goHomeW(){
    const header = document.querySelector("#head")
    const home = document.querySelector("#homeButton")
    
    home.addEventListener("click", function(){
        header.innerHTML = Header();
        suitUp();
    })
}

function rollOver2(){
    const sword = document.querySelector("#sword")
    const axe = document.querySelector("#axe")
    const bow = document.querySelector("#bow")
    const mace = document.querySelector("#wpn4")
    const maul = document.querySelector("#wpn5")
    const javelin = document.querySelector("#wpn6")

    const info = document.querySelector("#info")

    sword.addEventListener ("mouseenter", function() {
        info.innerHTML = `Words About Sword`
        })

    sword.addEventListener("mouseleave", function(){
        info.innerHTML = ``
    })

    axe.addEventListener ("mouseenter", function() {
        info.innerHTML = `Words About Axe`
    })

    axe.addEventListener("mouseleave", function(){
        info.innerHTML = ``
    })

    bow.addEventListener ("mouseenter", function() {
        info.innerHTML = `Words About Bow`
        })

    bow.addEventListener("mouseleave", function(){
        info.innerHTML = ``
    })

    mace.addEventListener ("mouseenter", function() {
        info.innerHTML = `Words About Mace`
        })

    mace.addEventListener("mouseleave", function(){
        info.innerHTML = ``
    })

    maul.addEventListener ("mouseenter", function() {
        info.innerHTML = `Words About Maul`
        })

    maul.addEventListener("mouseleave", function(){
        info.innerHTML = ``
    })

    javelin.addEventListener("mouseenter", function(){
        info.innerHTML = `Words about Javelin`
    })

    javelin.addEventListener("mouseleave", function(){
        info.innerHTML = ``
    })

}