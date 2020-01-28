import HeaderW from "./components/headW"
import Nav from "./components/nav"
import Weapons from "./components/weapons"

export default () => {
    displayWeaponry();
    // goHome();
    // rollOver2();
}

function displayWeaponry(){
    const header = document.querySelector("#head")
    const nav = document.querySelector("#nav");
    const app = document.querySelector("#app");

    header.innerHTML = HeaderW();
    nav.innerHTML = Nav();
    app.innerHTML = Weapons();
}
// function goHome(){
//     suitUp();
// }

// function rollOver2(){
//     const orign = document.querySelector("#orign")
//     const info = document.querySelector("#info")

//     orign.addEventListener ("mouseenter", function() {
//         info.innerHTML = `Words About Origin`
//         })
// }