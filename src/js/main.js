import Header from "./components/head"
// import goHome from "./personalityFunction"
import Footer from "./components/footer"
import suitUp from "./suitFunctions"
import { HotModuleReplacementPlugin } from "webpack"

export default () => {
    pageBuild();
}

function pageBuild(){
    startUp()
    head();
    // home();
    foot();
}

function head(){
    const header = document.getElementById("head")
    header.innerHTML = Header()
}

function foot(){
    const footer = document.getElementById("foot")
    footer.innerHTML = Footer()
}

function startUp(){
    suitUp();
}

// function home(){
//     goHome();
// }