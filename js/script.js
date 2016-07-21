// ------------ Button Selectors ------------- //

document.querySelector("#killButton")
document.querySelector('#winButton')

// ------------ Screens  ------------- //

var everything = document.querySelector('body')
var axePortrait = document.querySelector('.startScreen1')

var gameOver1 = document.querySelector('.gameOver1')
var gameOver2 = document.querySelector('.gameOver2')
var gameOver3 = document.querySelector('.gameOver3')

// ------------ Life Bars ------------- //

var lifeContainer = document.getElementsByTagName('span')

var axeLifeBar = document.querySelector('.axeLifeBar')
var axeLifeBarPercentWidth = 100

var enemyLifeBar = document.querySelector('.enemyLifeBar')
var enemyLifeBarPercentWidth = 100

// ------------ Combat Log Selectors ------ //

var combatLog = document.querySelector('.combatLog')


// ------------ Sound Scripts ------------- //

// This is an randomizer function to play random mp3's from an array of sounds.
Array.prototype.choice = function() {
        var randomIndex = Math.floor(Math.random() * this.length)
        return this[randomIndex]
    }
// ----------------------------------------- //

// ------------ Button Scripts ------------- //


var audioIds = ["#axeCullingBlade", "#firstBlood", "#svenWarcry1", "#svenWarcry2", "#svenStunned", "#axeWarcry1", "#axeWarcry2", "#axeDeath","#svenDeath"]
var victoryIds = ["#axeWins", "#enemyWins"]
var combatAudio =  ["#axeCullingBlade", "#svenWarcry1", "#svenWarcry2", "#svenStunned", "#axeWarcry1", "#axeWarcry2"]
$(killButton).on('click', function() {
    var idCounter = Math.round(Math.random()* 5)
    console.log(idCounter, "<<< audio index")

    var audioElId = combatAudio[idCounter] // This will only cycle through starting on the 1st index.
    var audioEl = document.querySelector(audioElId)
    
     var clashAudio = document.querySelector(combatAudio[0])

    clashAudio.play()

    var axeDmgCounter = Math.round((Math.random() * 40))


    axeLifeBarPercentWidth -= axeDmgCounter
    console.log(axeDmgCounter)

    // var combatLogEntry = combatLog.createElement('p')

    combatLog.innerHTML += "<p class='combatInfo'>Sven deals " + axeDmgCounter + "!</p>"



    axeLifeBar.style.width = axeLifeBarPercentWidth + '%'
    console.log("axe's hp remaining: "+ axeLifeBarPercentWidth)

    
    var enemyDmgCounter = Math.round((Math.random() * 40))
    enemyLifeBarPercentWidth -= enemyDmgCounter

    combatLog.innerHTML += "<p class='combatInfo'>Axe deals " + enemyDmgCounter + "!</p>"


    enemyLifeBar.style.width = enemyLifeBarPercentWidth + '%'
    console.log("sven's hp remaining: "+ enemyLifeBarPercentWidth)

    if(axeLifeBarPercentWidth < enemyLifeBarPercentWidth){
    $(".startScreen1").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); // Blinking Axe effect when hit.
    }
    if(enemyLifeBarPercentWidth < axeLifeBarPercentWidth){
    $(".startScreen2").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200); // Blinking Sven effect when hit.
    }

        audioEl.play()

	    if (axeLifeBarPercentWidth <= 0) {
            combatLog.innerHTML += "<p class='axeCombatInfo'>Axe is defeated!</p>"
            axePortrait.src = 'images/axeInjured.gif'

            setTimeout(function(){
	        var audioElId = victoryIds[1] // This will only cycle through starting on the 1st index.
	        var audioEl = document.querySelector(audioElId)
	        lifeContainer[0].style.display = 'none'
            lifeContainer[1].style.display = 'none'
	        gameOver2.style.display = 'block'
	        audioEl.play()
	    },2000)
            return
    }

	    if (enemyLifeBarPercentWidth <= 0) {
            combatLog.innerHTML += "<p class='svenCombatInfo'>Sven is defeated!</p>"


            setTimeout(function(){
	        var audioElId = victoryIds[0] // This will only cycle through starting on the 1st index.
	        var audioEl = document.querySelector(audioElId)
	        lifeContainer[0].style.display = 'none'
            lifeContainer[1].style.display = 'none'
	        gameOver1.style.display = 'block'
	        audioEl.play()
	    },2000)
            return
    }
// }
})

$(winButton).on('click', function() {

    var audioElId = audioIds[7] // This will only cycle through starting on the 1st index.
    var audioEl = document.querySelector(audioElId)

    var lifeContainer = document.getElementsByTagName('span')
    console.log(document.getElementsByTagName('span'))


    lifeContainer[0].style.display = 'none'
    lifeContainer[1].style.display = 'none'
    gameOver3.style.display= 'block'

    audioEl.play()
})

// ------------ BG Music ------------- //

window.onload = function() {
    var audioEl = document.querySelector('#dota2theme')
    audioEl.play()
}