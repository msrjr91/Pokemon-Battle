//GLOBAL VARIABLES
let searchContainer = document.querySelector(".search-container")
let battleArena = document.querySelector(".battle-container")
let playerParty = document.querySelector(".player-party")
let searchBar = document.querySelector(".search-form")
let startButton = document.querySelector(".start-battle")
let playerDeployedArea = document.querySelector(".player-deployed")
let rivalDeployedPokemon = document.querySelector(".rival-deployed")
let myDeployedPokemon = document.querySelector(".player-deployed")

//counter for num of pokemon user has selected
let count = 0

//player and rival array consisting of pokemon in respective parties
let player = []
let playerStats = {
  numPokemon: 4,
  turn: false, //player has first move by default in this game
  setup: false, //ensure player has selected four pokemon to initiate battle sequence
  deployed: false, //tracks if player can send a pokemon out
  currentPokemon: [],
}

let rival = [{
  "id": "base3-4",
  "name": "Dragonite",
  "supertype": "Pokémon",
  "subtypes": [
  "Stage 2"
  ],
  "level": "45",
  "hp": "100",
  "types": [
  "Colorless"
  ],
  "attacks": [
  {
  "name": "Slam",
  "cost": [
  "Colorless",
  "Colorless",
  "Colorless",
  "Colorless"
  ],
  "convertedEnergyCost": 4,
  "damage": "40×",
  "text": "Flip 2 coins. This attack does 40 damage times the number of heads."
  }
  ],
  "resistances": [
  {
  "type": "Fighting",
  "value": "-30"
  }
  ],
  "retreatCost": [
  "Colorless"
  ],
  "nationalPokedexNumbers": [
  149
  ],
  "images": {
  "small": "https://images.pokemontcg.io/base3/4.png",
  "large": "https://images.pokemontcg.io/base3/4_hires.png"
  },
  },{
    "id": "base6-66",
    "name": "Tentacruel",
    "supertype": "Pokémon",
    "subtypes": [
    "Stage 1"
    ],
    "level": "21",
    "hp": "60",
    "types": [
    "Water"
    ],
    "attacks": [
    {
    "name": "Supersonic",
    "cost": [
    "Water"
    ],
    "convertedEnergyCost": 1,
    "damage": "",
    "text": "Flip a coin. If heads, the Defending Pokémon is now Confused."
    },
    {
    "name": "Jellyfish Sting",
    "cost": [
    "Water",
    "Water"
    ],
    "convertedEnergyCost": 2,
    "damage": "10",
    "text": "The Defending Pokémon is now Poisoned."
    }
    ],
    "weaknesses": [
    {
    "type": "Lightning",
    "value": "×2"
    }
    ],
    "images": {
    "small": "https://images.pokemontcg.io/base6/66.png",
    "large": "https://images.pokemontcg.io/base6/66_hires.png"
    }
    },{
      "id": "base1-12",
      "name": "Ninetales",
      "supertype": "Pokémon",
      "subtypes": [
      "Stage 1"
      ],
      "level": "32",
      "hp": "80",
      "types": [
      "Fire"
      ],
      "evolvesFrom": "Vulpix",
      "attacks": [
      {
      "name": "Lure",
      "cost": [
      "Colorless",
      "Colorless"
      ],
      "convertedEnergyCost": 2,
      "damage": "",
      "text": "If your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon."
      },
      {
      "name": "Fire Blast",
      "cost": [
      "Fire",
      "Fire",
      "Fire",
      "Fire"
      ],
      "convertedEnergyCost": 4,
      "damage": "80",
      "text": "Discard 1 Fire Energy card attached to Ninetales in order to use this attack."
      }
      ],
      "weaknesses": [
      {
      "type": "Water",
      "value": "×2"
      }
      ],
      "retreatCost": [
      "Colorless"
      ],
      "convertedRetreatCost": 1,
      "nationalPokedexNumbers": [
      38
      ],
      "images": {
      "small": "https://images.pokemontcg.io/base1/12.png",
      "large": "https://images.pokemontcg.io/base1/12_hires.png"
      }
      },{
        "id": "base3-5",
        "name": "Gengar",
        "supertype": "Pokémon",
        "subtypes": [
        "Stage 2"
        ],
        "level": "38",
        "hp": "80",
        "types": [
        "Psychic"
        ],
        "evolvesFrom": "Haunter",
        "attacks": [
        {
        "name": "Dark Mind",
        "cost": [
        "Psychic",
        "Psychic",
        "Psychic"
        ],
        "convertedEnergyCost": 3,
        "damage": "30",
        "text": "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
        }
        ],
        "resistances": [
        {
        "type": "Fighting",
        "value": "-30"
        }
        ],
        "retreatCost": [
        "Colorless"
        ],
        "convertedRetreatCost": 1,
        "nationalPokedexNumbers": [
        94
        ],
        "images": {
        "small": "https://images.pokemontcg.io/base3/5.png",
        "large": "https://images.pokemontcg.io/base3/5_hires.png"
        }
        }]
let rivalStats = {
  numPokemon: 4,
  turn: false,
  deployed: false,
  items: 0,
  currentPokemon: [],
}

//Initiate song and sound effect variables/functions
let songs = {
  starting: true,
  battle: false,
  victory: false,
}
let startSong = new Audio('Audio/1-01. Opening.mp3')
startSong.loop = true
startSong.play()

let battleSong = new Audio('Audio/1-28. Battle (Vs. Gym Leader).mp3')
battleSong.loop = true

let victorySong = new Audio('Audio/1-29. Victory (Vs. Gym Leader).mp3')
victorySong.loop = true

let playButton = document.querySelector('.play-music')
playButton.addEventListener('click', function(){
  if(songs.starting){
    startSong.play()
  }else if(songs.battle){
    battleSong.play()
  }else if(songs.victory){
    victorySong.play()
  }
  
})

let pauseButton = document.querySelector('.pause-music')
pauseButton.addEventListener("click", function(){
  if(songs.starting){
    startSong.pause()
  }else if(songs.battle){
    battleSong.pause()
  }else if(songs.victory){
    victorySong.pause()
  }
  
})
const playBattleSong = () => {
  songs.starting = false
  songs.battle = true
  songs.victory = false
  startSong.pause()
  battleSong.play()
}
const playVictorySong = () => {
  songs.starting = false
  songs.battle = false
  songs.victory = true
  startSong.pause()
  battleSong.pause()
  victorySong.play()
}
const rivalPokemonSong = () => {
  let rivalSong = new Audio('Audio/Growl.mp3')
  rivalSong.loop = false
  rivalSong.play()

}
const playerPokemonSong = () => {
  let playerSong = new Audio('Audio/Roar.mp3')
  playerSong.loop = false
  playerSong.play()
}

const playAttackSong = () => {
  let attackSong = new Audio('Audio/Slash.mp3')
  attackSong.loop = false
  attackSong.play()
}

//GAME FUNCTIONS

//search function that outputs pokemon card
const searchCard = (res) => {
  let candidateArr = []
  for(let a = 0; a < res.data.length; a++){
    if(res.data[a].id.startsWith('base')){
      candidateArr.push(res.data[a])
    }
  }
  //display the searched pokemon on screen
  searchContainer.innerHTML = `<img class="search-output" src='${candidateArr[0].images.small}' alt='${res.data[0].name}'>`
  return candidateArr[0]
}

const addCard = (res) => {
  let candidates = searchCard(res)
  let searchedPokemon = document.querySelector(".search-output")
  searchedPokemon.addEventListener("click", function(){
    player.push(candidates)
    let newPokemon = document.createElement('div')
    newPokemon.innerHTML = `<img class="my-party" src='${candidates.images.small}'>`
    playerParty.append(newPokemon)
    count++
    if(count == 4){
      searchBar.remove()
      searchedPokemon.remove()
      playBattleSong()
      let introMessage = document.querySelector(".challenge-message")
      introMessage.innerHTML = "You've been challenged to a battle!"
      introMessage.style.opacity = 1
      setTimeout(function(){
        introMessage.remove()
      }, 2500)
      battleMain()
    }
    })
}

// connect to pokemon tcg api to enable pokemon search
async function getData(){
  let textInput = document.querySelector('#inputBar').value
  const url =  `https://api.pokemontcg.io/v2/cards?q=name:${textInput}`

  fetch(url)
    .then(res => {
      return res.json()
    })
    .then(res => {
      searchCard(res)
      addCard(res)
    })
    .catch(err => {
      console.log("something went wrong...", err)
    })
}

//press button to submit query:
let button = document.querySelector('#searchButton')
button.onclick = getData

//press enter to submit query:
const inputBar = document.getElementById('inputBar')
inputBar.addEventListener("keypress", (event)=>{
  if(event.key === 'Enter'){
    event.preventDefault()
    getData()
  }
})





//Actual Game Functions

const playerPokemonSelection = () => {
  let myParty = document.querySelectorAll(".my-party")
  for(let i = 0; i < myParty.length; i++){
    if(!playerStats.deployed){
      myParty[i].addEventListener("click", function(){
        playerPokemonSong()
        playerStats.currentPokemon = player[i]
        //append clicked pokemon card to deployed slot
        let toAdd = document.createElement("img")
        toAdd.src = myParty[i].getAttribute("src")
        toAdd.setAttribute("class", "player-deployed-pokemon")
        myDeployedPokemon.prepend(toAdd)
        //remove clicked pokemon from deck/party
        myParty[i].remove()
        player.splice(i, 1)
        //display correct HP
        let playerHP = document.querySelector(".player-hp")
        playerHP.innerHTML = `HP: ${parseInt(playerStats.currentPokemon.hp)}`
        //set attack buttons
        if(playerStats.currentPokemon.hasOwnProperty("attacks")){
          playerStats.currentPokemon.attacks.forEach((attack) => {
            let attackButton = document.createElement("button")
            attackButton.setAttribute("class", "player-attack-buttons")
            attackButton.setAttribute("element", `${attack.cost[0]}`)
            if(attack.damage === ""){
              attackButton.setAttribute("damage", 10)
            }else{
              attackButton.setAttribute('damage', `${parseInt(attack.damage.replace('+', ''))}`)
            }
            attackButton.innerHTML = `${attack.name}`
            myDeployedPokemon.append(attackButton)
            // console.log("attack move: ", attackMove.innerHTML)
            attackButton.addEventListener("click", function(){
                playerAttack(attackButton.innerHTML, attackButton.getAttribute("damage"), attackButton.getAttribute("element"))
              })
          
          })
        }
        playerStats.turn = true
        playerStats.deployed = true
      })
    }
  }
}


const playerAttack = (attackName, damage, element) => {
  if(playerStats.turn){
    console.log("clicked!", attackName, damage, element)
    let playerMessage = document.querySelector(".player-message")
    let playerMessageDisplay = document.createElement("div")
    playerMessageDisplay.setAttribute("class", "player-inner-display")
    playerMessageDisplay.innerHTML = `${playerStats.currentPokemon.name} used ${attackName}!`
    playerMessage.append(playerMessageDisplay)
    playerMessage.style.opacity = 1
    playAttackSong()
    setTimeout(function(){
      playerMessageDisplay.remove()
      playerMessage.style.opacity = 0
    }, 2000)
    let trueDamage;
    let effectivenessDisplay;
    if(rivalStats.currentPokemon.hasOwnProperty("weaknesses")){//not all pokemone have weaknesses so we must check for one
      if(element == rivalStats.currentPokemon.weaknesses[0].type){
        trueDamage = damage * 2
        effectivenessDisplay = "super effective"
      }else{
        trueDamage = damage
        effectivenessDisplay = ""
      }
    }else{
      if(element == rivalStats.currentPokemon.resistances[0].type){
        trueDamage = damage/2
        effectivenessDisplay = "not very effective"
      }else{
        trueDamage = damage
        effectivenessDisplay = ""
      }
    }
    rivalStats.currentPokemon.hp = parseInt(rivalStats.currentPokemon.hp) - trueDamage
    let rivalHealth = document.querySelector('.rival-hp')
    if(rivalStats.currentPokemon.hp > 0){
      rivalHealth.innerHTML =  `HP: ${rivalStats.currentPokemon.hp}`
    }else{
      rivalHealth.innerHTML =  "HP: 0"
    }
    if(effectivenessDisplay != ""){
      let playerMessageDisplay = document.createElement("div")
      playerMessageDisplay.setAttribute("class", "player-inner-display")
      playerMessageDisplay.innerHTML = `It's ${effectivenessDisplay}!`
      playerMessage.append(playerMessageDisplay)
      playerMessage.style.opacity = 1
      setTimeout(function(){
        playerMessageDisplay.remove()
        playerMessage.style.opacity = 0
      },2000)
    }
    rivalStats.turn = true
    playerStats.turn = false
    console.log("rival: ",rivalStats.turn)
    setTimeout(function(){
      rivalAttack()
    }, 3000)
    if(rivalStats.currentPokemon.hp <= 0){
      let rivalCurrentPokemon = document.querySelector(".rival-deployed-pokemon")
      rivalCurrentPokemon.remove()
      rivalStats.numPokemon--
      if(rivalStats.numPokemon > 0){
        rivalPokemonSelection()
      }else{
        playVictorySong()
        rivalStats.turn = false
        let winMessageArea = document.querySelector('.results-container')
      
        let playAgain = document.createElement('button')
        playAgain.innerHTML = "Play Again"
        playAgain.setAttribute("class", "play-again")
        winMessageArea.prepend(playAgain)
  
        let winMessage = document.createElement('h2')
        winMessage.innerText = "You Win!"
        winMessageArea.prepend(winMessage)
  
        playAgain.addEventListener("click", function(){
          window.location.reload()
        })
      }
    }
  }
  
}


const rivalPokemonSelection = () => {
  if(!rivalStats.deployed){
    rivalPokemonSong()
    //choose random pokemon from rival's party
    let choiceIndex = Math.floor(Math.random() * rival.length)
    let rivalPokemon = rival[choiceIndex]
    rivalStats.currentPokemon = rivalPokemon
  
    //deploy selected pokemon
    let toAdd = document.createElement("img")
    toAdd.src = rivalStats.currentPokemon.images.small
    toAdd.setAttribute("class", "rival-deployed-pokemon")
    rivalDeployedPokemon.append(toAdd)
  
    //remove a face down card
    let faceDown = document.querySelectorAll(".face-down")
    faceDown[0].remove()
    rival.splice(choiceIndex, 1)
  
    //set correct HP
    let rivalHP = document.querySelector(".rival-hp")
    rivalHP.innerHTML = `HP: ${parseInt(rivalStats.currentPokemon.hp)}`
  }

}

const rivalAttack = () => {
  if(rivalStats.turn){
    let rivalAttackIndex = Math.floor(Math.random() * rivalStats.currentPokemon.attacks.length)
    let rivalAttackChoice = rivalStats.currentPokemon.attacks[rivalAttackIndex].name
    let rivalMessage = document.querySelector('.rival-message')
    let rivalMessageDisplay = document.createElement('div')
    rivalMessageDisplay.setAttribute("class", "rival-inner-display")
    rivalMessageDisplay.innerHTML = `${rivalStats.currentPokemon.name} used ${rivalAttackChoice}!`
    rivalMessage.append(rivalMessageDisplay)
    rivalMessage.style.opacity = 1;
    playAttackSong()
    setTimeout(function(){
      rivalMessageDisplay.remove()
      rivalMessage.style.opacity = 0
    }, 2000)

    let attackType = rivalStats.currentPokemon.attacks[rivalAttackIndex].cost[0]
    let damage;
    if(rivalStats.currentPokemon.attacks[rivalAttackIndex].damage == ''){
      damage = 10
    }else{
      damage = parseInt(rivalStats.currentPokemon.attacks[rivalAttackIndex].damage.replace('+', ''))
    }
    let trueDamage;
    let effectivenessDisplay;
    if(playerStats.currentPokemon.hasOwnProperty("weaknesses")){//not all pokemon have weaknesses so we must check for one
      if(attackType == playerStats.currentPokemon.weaknesses[0].type){
        trueDamage = damage * 2
        effectivenessDisplay = "super effective"
      }else{
        trueDamage = damage
        effectivenessDisplay = ""
      }
    }else{
      if(attackType == playerStats.currentPokemon.resistances[0].type){
        trueDamage = damage/2
        effectivenessDisplay = "not very effective"
      }else{
        trueDamage = damage
        effectivenessDisplay = ""
      }
    }
    playerStats.currentPokemon.hp = parseInt(playerStats.currentPokemon.hp) - trueDamage
    let playerHealth = document.querySelector(".player-hp")
    if(playerStats.currentPokemon.hp > 0){
      playerHealth.innerHTML = `HP: ${playerStats.currentPokemon.hp}`
    }else{
      playerHealth.innerHTML = "HP: 0"
    }
   
   
    if(effectivenessDisplay != ""){
      let rivalMessageDisplay = document.createElement('div')
      rivalMessageDisplay.setAttribute("class", "rival-inner-display")
      rivalMessageDisplay.innerHTML = `It's ${effectivenessDisplay}!`  
      rivalMessage.append(rivalMessageDisplay) 
      rivalMessage.style.opacity = 1 
      setTimeout(function(){
        rivalMessageDisplay.remove()
        rivalMessage.style.opacity = 0
      }, 2000)    
    }
    
    rivalStats.turn = false
    playerStats.turn = true
    if(playerStats.currentPokemon.hp <= 0){
      playerStats.numPokemon--
      let playerCurrent = document.querySelector(".player-deployed-pokemon")
      playerCurrent.remove()
      let playerButtons = document.querySelectorAll(".player-attack-buttons")
      playerButtons.forEach((button) => {
        button.remove()
      })
      playerStats.deployed = false
      if(playerStats.numPokemon > 0){
        playerPokemonSelection()
      }else{
        let losingMessageArea = document.querySelector('.results-container')
        
        let playAgain = document.createElement('button')
        playAgain.innerHTML = "Play Again"
        playAgain.setAttribute("class", "play-again")
        losingMessageArea.prepend(playAgain)
  
        let losingMessage = document.createElement('h2')
        losingMessage.innerText = "You Lose!"
        losingMessageArea.prepend(losingMessage)
  
        playAgain.addEventListener("click", function(){
          window.location.reload()
        })
  
      }
    }
  }
}



const battleMain = () => {
  rivalPokemonSelection()
  playerPokemonSelection()
  playerAttack()
}







