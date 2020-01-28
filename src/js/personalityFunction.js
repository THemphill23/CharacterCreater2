import HeaderP from "./components/headP"
import Nav from "./components/nav"
import Personality from "./components/personality"

export default () => {
    displayPersona();
    // goHome();
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