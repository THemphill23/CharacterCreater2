import HeaderP from "./components/headP"
import HeaderW from "./components/headW"
import Suit from "./components/suit"
import Nav from "./components/nav"
import displayPersona from "./personalityFunction"
import displayWeaponry from "./weaponFunction"

export default () => {
    suitUp();
    rollOver();
    click();
}

function suitUp(){
    const nav = document.querySelector("#nav");
    const app = document.querySelector("#app");
    nav.innerHTML = "";
    app.innerHTML = Suit();
}

function rollOver(){    
    const helmButton = document.querySelector("#helmetBTN");
    const swordButton = document.querySelector("#swordBTN");
    const shieldButton = document.querySelector("#shieldBTN");
    const magicButton = document.querySelector("#flamesBTN");


        helmButton.addEventListener ("mouseenter", function() {
        helmButton.innerHTML = `Click this button to personalize your character's background.`
        })
    
        helmButton.addEventListener ("mouseleave", function() {
            helmButton.innerHTML = `<img src="/images/knight-helmet.jpg" alt="helmet" id="gridItemHelmet"/>Personality`
        })
    
        
        swordButton.addEventListener ("mouseenter", function() {
            swordButton.innerHTML = `Click this button to determine your character's weapons.`
        })
        
        swordButton.addEventListener ("mouseleave", function() {
            swordButton.innerHTML = `<img src="/images/sword.png" alt="sword" id="gridItemSword"/>Weapons`
        })
        
        
        magicButton.addEventListener ("mouseenter", function() {
            magicButton.innerHTML = `Click this button to determine your character's magic and/or abilities.`
        })
        
        magicButton.addEventListener ("mouseleave", function() {
            magicButton.innerHTML = `<img src="/images/flames.png" alt="flames" id="gridItemFlames">Magic`
        })
        
        shieldButton.addEventListener ("mouseenter", function() {
            shieldButton.innerHTML = `Click this button to determine your character's armor and proctection.`
        })
        
        shieldButton.addEventListener ("mouseleave", function() {
            shieldButton.innerHTML = `<img src="/images/armor.png" alt="shield" id="gridItemShield"/>Armor`
        })

    }
    
    function click(){
        const header = document.querySelector("#head")
        const helmButton = document.querySelector("#helmetBTN");
        const swordButton = document.querySelector("#swordBTN");
        const homeButton = document.querySelector("#homeButton")
        const shieldButton = document.querySelector("#shieldBTN")
        const magicButton = document.querySelector("#flamesBTN");
    
        helmButton.addEventListener ("click", function() {
            displayPersona();
        })

        swordButton.addEventListener ("click", function() {
            displayWeaponry();
        })
}