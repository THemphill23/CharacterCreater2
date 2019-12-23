import Header from "./components/head"
import Suit from "./components/suit"

export default () => {
    goHome();
    rollOver2();
}

function goHome(){
    const person = document.querySelector("#homeBTN")
    const app = document.querySelector("#app");
    const header = document.querySelector("#head")
        person.addEventListener ("click", function() {
            app. innerHTML = Suit();
            header.innerHTML = Header();
    })
}

function rollOver2(){
    const orign = document.querySelector("#orign")
    const info = document.querySelector("#info")

    orign.addEventListener ("mouseenter", function() {
        info.innerHTML = `Words About Origin`
        })
}