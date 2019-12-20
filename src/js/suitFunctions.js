import goHome from "./personalityFunction"
import headP from "./components/headP"
import Suit from "./components/suit"
import Personality from "./components/personality"

export default () => {
    suitUp();
    home();
    rollOver();
}

function suitUp(){
    const app = document.querySelector("#app");
    app.innerHTML = Suit()
}

function home(){
    goHome();
}

function rollOver(){    
    const header = document.querySelector("#head")
    const helmButton = document.querySelector("#helmetBTN");
    const swordButton = document.querySelector("#swordBTN");
    const shieldButton = document.querySelector("#shieldBTN")
    const magicButton = document.querySelector("#flamesBTN");

        helmButton.addEventListener ("mouseenter", function() {
        helmButton.innerHTML = `Click this button to personalize your character's background.`
        })
    
        helmButton.addEventListener ("mouseleave", function() {
            helmButton.innerHTML = `<img src="/images/knight-helmet.jpg" alt="helmet" id="gridItemHelmet"/>Personality`
        })
    
        helmButton.addEventListener ("click", function() {
            header.innerHTML = headP();
            app.innerHTML = Personality();
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
