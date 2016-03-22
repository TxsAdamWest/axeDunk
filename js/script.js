document.querySelector("#killButton")


var lifeBar = document.querySelector('.lifeBar')
var lifeBarPercentWidth = 100

Array.prototype.choice = function() {
    var randomIndex = Math.floor(Math.random() * this.length)
    return this[randomIndex]
}

// var audioSrcs = ["sounds/FirstBlood.mp3","sounds/DoubleKill.mp3",
// "sounds/TripleKill.mp3","sounds/Rampage.mp3","sounds/HolyShit.mp3"]

var audioIds = ["#axeCullingBlade","#firstBlood","#doubleKill","#tripleKill","#rampage","#holyShit"]
var idCounter = 0

$(killButton).on('click', function() {
	// var audioElId = audioIds[idCounter]
	var audioElId = audioIds[0]
	var audioEl = document.querySelector(audioElId)
	idCounter += 1

	lifeBarPercentWidth -= 20 
	lifeBar.style.width = lifeBarPercentWidth + '%'

	console.log(lifeBar.offsetWidth)

    audioEl.play()
})

window.onload = function() {
    var audioEl = document.querySelector('#dota2theme')
    audioEl.play()
}

