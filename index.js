
const area1 = document.getElementById('helmWords');
const helmButton = document.getElementById('helmetBTN');
const swordButton = document.getElementById('swordBTN');
const area2 = document.getElementById('weaponWords');
const magicButton = document.getElementById('flamesBTN');
const area3 = document.getElementById('magicWords')
const shieldButton = document.getElementById('shieldBTN')
const area4 = document.getElementById('shieldWords')

helmButton.addEventListener ("mouseenter", function() {
area1.innerHTML = "Click this button to personalize your character's background."
})

helmButton.addEventListener ("mouseleave", function() {
    area1.innerHTML = ""
})

swordButton.addEventListener ("mouseenter", function() {
    area2.innerHTML = "Click this button to determine your character's weapons."
})

swordButton.addEventListener ("mouseleave", function() {
    area2.innerHTML = ""
})

magicButton.addEventListener ("mouseenter", function() {
area3.innerHTML = "Click this button to determine your character's magic and/or abilities."
})

magicButton.addEventListener ("mouseleave", function() {
    area3.innerHTML = ""
})

shieldButton.addEventListener ("mouseenter", function() {
    area4.innerHTML = "Click this button to determine your character's armor and proctection."
    })
    
shieldButton.addEventListener ("mouseleave", function() {
    area4.innerHTML = ""
})