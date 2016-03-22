// ------------ Button Selectors ------------- //

document.querySelector("#killButton")
document.querySelector('#winButton')

// ------------ Screens  ------------- //

document.querySelector('.startScreen1')

var gameOver1 = document.querySelector('.gameOver1')
var gameOver2 = document.querySelector('.gameOver2')
var gameOver3 = document.querySelector('.gameOver3')

// ------------ Life Bars ------------- //

var lifeContainer = document.querySelector('span')

var axeLifeBar = document.querySelector('.axeLifeBar')
var axeLifeBarPercentWidth = 100

var enemyLifeBar = document.querySelector('.enemyLifeBar')
var enemyLifeBarPercentWidth = 100


// ------------ Sound Scripts ------------- //

// This is an randomizer function to play random mp3's from an array of sounds.
Array.prototype.choice = function() {
        var randomIndex = Math.floor(Math.random() * this.length)
        return this[randomIndex]
    }
    // ----------------------------------------- //

// ------------ Button Scripts ------------- //


var audioIds = ["#axeCullingBlade", "#firstBlood", "#svenWarcry1", "#svenWarcry2", "#svenStunned", "#axeWarcry1", "#axeWarcry2", "#axeDeath"]
var victoryIds = ["#axeWins", "#enemyWins"]
var idCounter = 0

$(killButton).on('click', function() {

    // var audioElId = audioIds.choice() // This will cycle through all sounds in audioIds
    var audioElId = audioIds[idCounter] // This will only cycle through starting on the 1st index.
    var audioEl = document.querySelector(audioElId)
    idCounter += 1

    axeLifeBarPercentWidth -= (Math.random() * 40)
    axeLifeBar.style.width = axeLifeBarPercentWidth + '%'

    enemyLifeBarPercentWidth -= (Math.random() * 40)
    enemyLifeBar.style.width = enemyLifeBarPercentWidth + '%'

    $(".startScreen1").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); // Blinking effect when hit.
    // $(".startScreen2").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);

    // console.log(lifeBar.offsetWidth)

    if (axeLifeBarPercentWidth < 0) {
        var audioElId = victoryIds[1] // This will only cycle through starting on the 1st index.
        var audioEl = document.querySelector(audioElId)
        lifeContainer.style.display = 'none'
        gameOver2.style.display = 'block'
    }

    if (enemyLifeBarPercentWidth < 0) {
        var audioElId = victoryIds[0] // This will only cycle through starting on the 1st index.
        var audioEl = document.querySelector(audioElId)
        lifeContainer.style.display = 'none'
        gameOver1.style.display = 'block'
    }

    audioEl.play()
})

$(winButton).on('click', function() {

    var audioElId = audioIds[7] // This will only cycle through starting on the 1st index.
    var audioEl = document.querySelector(audioElId)

    lifeContainer.style.display = 'none'
    gameOver3.style.display = 'block'

    audioEl.play()
})

// ------------ BG Music ------------- //

window.onload = function() {
    var audioEl = document.querySelector('#dota2theme')
    audioEl.play()
}