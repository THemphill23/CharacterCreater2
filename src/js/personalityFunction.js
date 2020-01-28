import HeaderP from "./components/headP"
import Header from "./components/head"
import Nav from "./components/nav"
import Personality from "./components/personality"
import suitUp from "./suitFunctions"

export default () => {
    displayPersona();
    goHomeP();
    // rollOver2();
}

function displayPersona(){
    const header = document.querySelector("#head")
    const nav = document.querySelector("#nav");
    const app = document.querySelector("#app");

    header.innerHTML = HeaderP();
    nav.innerHTML = Nav();
    app.innerHTML = Personality();
}

function goHomeP(){
    const header = document.querySelector("#head")
    const home = document.querySelector("#homeButton")
    
    home.addEventListener("click", function(){
        header.innerHTML = Header();
        suitUp();
    })
}

// function rollOver2(){
//     const orign = document.querySelector("#orign")
//     const info = document.querySelector("#info")

//     orign.addEventListener ("mouseenter", function() {
//         info.innerHTML = `Words About Origin`
//         })
// }