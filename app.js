//INITIATE GAME DEFAULTS
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



//counter for num of pokemon user has selected
let count = 0

//player and rival array consisting of pokemon in respective parties
let player = []

let playerStats = {
  "numPokemon": 4,
  "turn": true,
  "ko": false,
  "items": 3,
  "currentPokemon": [],
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
  "numPokemon": 4,
  "turn": false,
  "ko": false,
  "items": 0,
  "currentPokemon": [],
}


// this function only selects the very first version of the card to ever release with event listener to add pokemon to party on click
const selectCard = (res) => {
  let cardDisplay = document.querySelector('.card-container')
  let candidateArr = [] //list of matching search query
  let a; //defining "a" because reference error without defining a in for loop? 
  for(a = 0; a < res.data.length; a++){
    if(res.data[a].id.startsWith('base')){
      candidateArr.push(res.data[a])
    }
  }
  //display the searched pokemon on screen
  cardDisplay.innerHTML = `<img class="current-playing" src='${candidateArr[0].images.small}' alt='${res.data[0].name}'>`
  //event listener for option to add searched pokemon into party
  let searchedPokemon = document.querySelector('.current-playing')
  searchedPokemon.addEventListener("click", () => {
    let playerParty = document.querySelector('.player-party')
    let newPokemon = document.createElement('div')
    newPokemon.innerHTML = `<img class="add-pokemon" id="${candidateArr[0].name}" src='${candidateArr[0].images.small}' alt='${res.data[0].name}'>`
    playerParty.append(newPokemon)

    //push the selected pokemon's object array into player list to access attributes
    player.push(candidateArr[0])
    count++
    if(count == 4){
      document.querySelector('.searchForm').remove()
      document.querySelector('.current-playing').remove()
      initiateBattleGround()
    }
    })  
}


//create function to show "start battle" button when user's party has four pokemon
const initiateBattleGround = () => {
  let battleSpace = document.querySelector('.battle-container')
  let startButton = document.createElement('button')
  startButton.className = 'start-button'
  startButton.innerHTML = "Start Battle!"
  battleSpace.append(startButton)
  //start battle event listener
  startButton.addEventListener("click", () => {
    playBattleSong()
    document.querySelector('.opponent-party').style.opacity = 1    
    startButton.remove()
    //play battle theme mp3 here
    //insert time delay function here to give some time for opacity to fade.
    pokemonBattle()
  })

}

const rivalPokemonChoice = () => {
  //choose random index of remaining pokemon in party to send out
  let choiceIndex = Math.floor(Math.random() * rival.length)
  let rivalPokemon = rival[choiceIndex]
  rivalStats.currentPokemon = rivalPokemon
  //send pokemon to battle space
  let rivalPokemonSpace = document.querySelector(".opponent-current-card")
  let newPokemon = document.createElement('div')
  newPokemon.innerHTML += `<img class="rival-current" src='${rivalPokemon.images.small}' alt='${rivalPokemon.name}'>`
  rivalPokemonSong()
  rivalPokemonSpace.append(newPokemon)
  //display hp
  let rivalHealth = document.querySelector('.opponent-health')
  rivalHealth.innerHTML =  `HP:${parseInt(rivalStats.currentPokemon.hp)}`
  //remove face down card in party to reflect correct total num of pokemon
  let rivalRemainingParty = document.querySelectorAll(".face-down")
  rivalRemainingParty[0].remove()
  //remove selected pokemon from party
  rival.splice(choiceIndex,1)
}


const rivalAttackSequence = () => {
  console.log("num attacks: ", rivalStats.currentPokemon.attacks.length)
  let rivalAttackIndex = Math.floor(Math.random() * rivalStats.currentPokemon.attacks.length) 
  console.log("attack index: ", rivalAttackIndex)
  let rivalAttackChoice = rivalStats.currentPokemon.attacks[rivalAttackIndex].name
  console.log(rivalAttackChoice)
  let playerMessage = document.querySelector('.player-attack')
  
  let rivalAttackMessage = document.createElement('p')
  rivalAttackMessage.setAttribute("class", "rival-attack-message")
  rivalAttackMessage.innerHTML = `${rivalStats.currentPokemon.name} used ${rivalAttackChoice}!`
  playerMessage.append(rivalAttackMessage) //not displaying
  console.log(rivalAttackMessage)
  setTimeout(function(){
    playAttackSong()
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
    let playerHealth = document.querySelector(".player-health")
    if(playerStats.currentPokemon.hp > 0){
      playerHealth.innerHTML = `HP: ${playerStats.currentPokemon.hp}`
    }else{
      playerHealth.innerHTML = "HP: 0"
    }

    setTimeout(function(){
      let rivalMessage = document.querySelector('.rival-attack-message')
      rivalMessage.remove()
      if(effectivenessDisplay != ""){
        let rivalEffectiveness = document.createElement('p')
        let playerMessage = document.querySelector('.player-attack')
        rivalEffectiveness.setAttribute("class", "rival-effectiveness")
        rivalEffectiveness.innerHTML = `It's ${effectivenessDisplay}!`
        playerMessage.append(rivalEffectiveness)
        
      }
  
      setTimeout(function(){
        let rivalEffectivenessDisplay = document.querySelector('.rival-effectiveness')
        rivalEffectivenessDisplay.remove()
      }, 1500)
      rivalStats.turn = false
      playerStats.turn = true
    }, 1500)
  
  
    if(playerStats.currentPokemon.hp <= 0){
      let playerCard = document.querySelector('.player-choice')
      let playerButtons = document.querySelectorAll('.attack')
      playerButtons.forEach((button) =>{
        button.remove()
      })
      playerCard.remove()
      playerStats.numPokemon--
      if(playerStats.numPokemon > 0){
        choosePokemon()
      }else{
        let losingMessageArea = document.querySelector('.battle-container')
        
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



  },1200)
  

  


  
}

const attackSequence = (damage, attackType) => {
  //determine damage value with weaknesses and resistance considered:
  let trueDamage;
  let effectivenessDisplay;
  if(rivalStats.currentPokemon.hasOwnProperty("weaknesses")){//not all pokemone have weaknesses so we must check for one
    if(attackType == rivalStats.currentPokemon.weaknesses[0].type){
      trueDamage = damage * 2
      effectivenessDisplay = "super effective"
    }else{
      trueDamage = damage
      effectivenessDisplay = ""
    }
  }else{
    if(attackType == rivalStats.currentPokemon.resistances[0].type){
      trueDamage = damage/2
      effectivenessDisplay = "not very effective"
    }else{
      trueDamage = damage
      effectivenessDisplay = ""
    }
  }

  rivalStats.currentPokemon.hp = parseInt(rivalStats.currentPokemon.hp) - trueDamage
  let rivalHealth = document.querySelector('.opponent-health')
  let playerMessage = document.querySelector('.player-attack')
  if(rivalStats.currentPokemon.hp > 0){
    rivalHealth.innerHTML =  `HP: ${rivalStats.currentPokemon.hp}`
  }else{
    rivalHealth.innerHTML =  "HP: 0"
  }

  if(effectivenessDisplay != ''){
    let effectiveness = document.createElement('p')
    effectiveness.setAttribute("class", "effectiveness-message")
    effectiveness.innerHTML = `It's ${effectivenessDisplay}!`
    playerMessage.append(effectiveness)

    setTimeout(function(){
      let effectivenessMessage = document.querySelector('.effectiveness-message')
      effectivenessMessage.remove()
      
    }, 1000)
  }

  
  
  if(rivalStats.currentPokemon.hp <= 0){
    let rivalCard = document.querySelector('.rival-current')
    rivalCard.remove()
    rivalStats.numPokemon--
    if(rivalStats.numPokemon > 0){
      rivalPokemonChoice()
    }else{
      playVictorySong()
      let winMessageArea = document.querySelector('.battle-container')
      
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
  playerStats.turn = false
  rivalStats.turn = true
  if(rivalStats.turn){
    setTimeout(function(){
      rivalAttackSequence();
    },2500)
    
  }
}

const choosePokemon = () => {
  const myParty = document.querySelectorAll('.add-pokemon')
  console.log("remaining party length", myParty.length)
  for(let i = 0; i < myParty.length; i++){
    
    myParty[i].addEventListener("click", () => {
      playerStats.currentPokemon = player[i]
      console.log("player current pokemon: ",playerStats.currentPokemon)
      //move selected pokemon into battle slot
      let playerCurrent = document.querySelector(".player-current-card")
      playerCurrent.innerHTML += `<img class="player-choice" src='${playerStats.currentPokemon.images.small}' alt='${playerStats.currentPokemon.name}'>`
      playerPokemonSong()
      //display selected pokemon's health
      let pokemonHealth = document.querySelector('.player-health')
      pokemonHealth.innerHTML = `HP:${parseInt(playerStats.currentPokemon.hp)}`
      player.splice(i, 1)
      myParty[i].remove()

      //add buttons for attacks
      if(playerStats.currentPokemon.hasOwnProperty("attacks")){
        playerStats.currentPokemon.attacks.forEach((attack) => {
          let attackOptions = document.querySelector('.attack-options')
          let attackButton = document.createElement('button')
          attackButton.setAttribute('class', 'attack')
          attackButton.setAttribute('id', `${attack.name}`)
          attackButton.setAttribute('element', `${attack.cost[0]}`)
          if(attack.damage === ""){
            attackButton.setAttribute('damage', 10) //several attacks have "0 damage" that increases with some chance condition that cannot be replicated here, setting these attacks to default 10 for convenience.
          }else{
            attackButton.setAttribute('damage', `${parseInt(attack.damage.replace('+', ''))}`)
          }
          attackButton.innerHTML = `${attack.name}`
          attackOptions.append(attackButton)



          if(playerStats.turn){
            attackButton.addEventListener("click", function(){
              let damage = attackButton.getAttribute('damage')
              let attackType = attackButton.getAttribute('element')
              let attackName = attackButton.getAttribute('id')
              let attackMessage = document.createElement('p')
              attackMessage.setAttribute("class", "attack-display-message")
              attackMessage.innerHTML = `${playerStats.currentPokemon.name} used ${attackName}!`
              let playerMessage = document.querySelector('.player-attack')
              playerMessage.append(attackMessage)
              
              //time delay to add some suspense to attacks
              setTimeout(function(){
                playAttackSong()
                document.querySelector('.attack-display-message').remove()
                //deal actual damage
                attackSequence(damage, attackType)
              }, 1500)
            })
            // rivalAttackSequence()
          }else if(rivalStats.turn){
            rivalAttackSequence()
          }
        })
      }else{ //some pokemon cards don't have attack moves, for this project we give these pokemon a default attack
        let attackOptions = document.querySelector('.attack-options')
        let attackButton = document.createElement('button')
        attackButton.setAttribute('class', 'attack')
        attackButton.setAttribute('id', "struggle")
        attackButton.setAttribute('damage', 5)
        attackButton.innerHTML = "Struggle"
        attackOptions.append(attackButton)


        attackButton.addEventListener("click", function(){
          attackMessage.setAttribute("class", "attack-display-message")
          attackMessage.innerHTML = `${playerStats.currentPokemon.name} used ${attackName}!`
          let playerMessage = document.querySelector('.player-attack')
          playerMessage.append(attackMessage)
          let damage = attackButton.getAttribute('damage')
          let attackType = attackButton.getAttribute('element')


          attackSequence(damage, attackType)
        })
      }
    })
  }
}





const pokemonBattle = () => {
  //rival sends out first pokemon
  rivalPokemonChoice()
  //player selects any pokemon from party
  choosePokemon()
}



// connect to pokemon tcg api 
async function getData(event){
  let textInput = document.querySelector('#inputBar').value
  const url =  `https://api.pokemontcg.io/v2/cards?q=name:${textInput}`

  // const url = `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[${i} TO ${i}]`
  // const url = `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 151]`

  fetch(url)
    .then(res => {
      return res.json()
    })
    .then(res => {
      selectCard(res)
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
