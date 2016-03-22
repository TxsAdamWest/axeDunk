// ------------ Button Selectors ------------- //

document.querySelector("#killButton")
document.querySelector('#winButton')

// ------------ Screens  ------------- //

document.querySelector('.startScreen1')

var gameOver1 = document.querySelector('.gameOver1')
var gameOver2 = document.querySelector('.gameOver2')

// ------------ Life Bars ------------- //


var axeLifeBar = document.querySelector('.axeLifeBar')
var enemyLifeBar = document.querySelector('.enemyLifeBar')
var lifeBarPercentWidth = 100

// ------------ Sound Scripts ------------- //

// This is an randomizer function to play random mp3's from an array of sounds.
Array.prototype.choice = function() {
    var randomIndex = Math.floor(Math.random() * this.length)
    return this[randomIndex]
}
// ----------------------------------------- //

// ------------ Button Scripts ------------- //


var audioIds = ["#axeCullingBlade","#firstBlood","#doubleKill","#tripleKill","#rampage","#holyShit","#axeDeath"]
var idCounter = 0

$(killButton).on('click', function() {

	// var audioElId = audioIds.choice() // This will cycle through all sounds in audioIds
	var audioElId = audioIds[idCounter] // This will only cycle through starting on the 1st index.
	var audioEl = document.querySelector(audioElId)
	idCounter += 1

	lifeBarPercentWidth -= 20 
	axeLifeBar.style.width = lifeBarPercentWidth + '%'

	$(".startScreen1").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); // Blinking effect when hit.

	// console.log(lifeBar.offsetWidth)

	if ( lifeBarPercentWidth < 0) {
		gameOver1.style.display = 'block' 
	}

    audioEl.play()
})

$(winButton).on('click', function() {

	var audioElId = audioIds[6] // This will only cycle through starting on the 1st index.
	var audioEl = document.querySelector(audioElId)

	gameOver2.style.display = 'block'

	audioEl.play()
})

// ------------ BG Music ------------- //

window.onload = function() {
    var audioEl = document.querySelector('#dota2theme')
    audioEl.play()
}

