import Header from "./components/head"
import Footer from "./components/footer"
import suitUp from "./suitFunctions"

export default () => {
    pageBuild();
}

function pageBuild(){
    startUp()
    head();
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