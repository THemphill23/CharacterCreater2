import Header from "./components/head"
import Suit from "./components/suit"

export default () => {
    goHome();
}

function goHome(){
    const person = document.querySelector("#person")
    const app = document.querySelector("#app");
    const header = document.querySelector("#head")
        // person.addEventListener ("click", function() {
            app. innerHTML = Suit();
            header.innerHTML = Header();
    // })
}