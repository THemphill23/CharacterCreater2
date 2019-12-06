import HeaderP from "./components/headP"
import Header from "./components/head"
import Footer from "./components/footer"

export default () => {
    pageBuild();
}

function pageBuild(){
    // startUp()
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
// function startUp(){
//     const area1 = document.querySelector("#helmWords");
//     const helmButton = document.querySelector("#helmetBTN");
//     const swordButton = document.querySelector("#swordBTN");
//     const area2 = document.querySelector("#weaponWords");
//     const magicButton = document.querySelector("#flamesBTN");
//     const area3 = document.querySelector("magicWords")
//     const shieldButton = document.querySelector("shieldBTN")
//     const area4 = document.querySelector("#shieldWords")

//     helmButton.addEventListener ("mouseenter", function() {
//     area1.innerHTML = "Click this button to personalize your character's background."
//     })

//     helmButton.addEventListener ("mouseleave", function() {
//         area1.innerHTML = ""
//     })

//     helmButton.addEventListener ("click", function() {
//         window.location="personality.html"
//         head.innerHTML = HeaderP()
//     })
    
//     swordButton.addEventListener ("mouseenter", function() {
//         area2.innerHTML = "Click this button to determine your character's weapons."
//     })
    
//     swordButton.addEventListener ("mouseleave", function() {
//         area2.innerHTML = ""
//     })
    
//     magicButton.addEventListener ("mouseenter", function() {
//     area3.innerHTML = "Click this button to determine your character's magic and/or abilities."
//     })
    
//     magicButton.addEventListener ("mouseleave", function() {
//         area3.innerHTML = ""
//     })
    
//     shieldButton.addEventListener ("mouseenter", function() {
//         area4.innerHTML = "Click this button to determine your character's armor and proctection."
//     })
        
//     shieldButton.addEventListener ("mouseleave", function() {
//         area4.innerHTML = ""
//     })
    
// }

