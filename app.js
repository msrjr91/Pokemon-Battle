//INITIATE GAME DEFAULTS
//Items objects:
const inventoryItems = [{
  "id": "xy0-37",
  "name": "Potion",
  "supertype": "Trainer",
  "rules": 30,
  "images": {
    "small": "https://images.pokemontcg.io/xy0/37.png",
    "large": "https://images.pokemontcg.io/xy0/37_hires.png"
    }
},
{
  "id": "swsh35-51",
  "name": "Full-Heal",
  "supertype": "Trainer",
  "rules": null,
  "images": {
    "small": "https://images.pokemontcg.io/swsh35/51.png",
    "large": "https://images.pokemontcg.io/swsh35/51_hires.png"
    }
},
{
  "id": "base1-90",
  "name": "Super-Potion",
  "supertype": "Trainer",
  "rules": 60,
  "images": {
    "small": "https://images.pokemontcg.io/base1/90.png",
    "large": "https://images.pokemontcg.io/base1/90_hires.png"
    }
}]

//player and rival array consisting of pokemon in respective parties
let player = []
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
  "evolvesFrom": "Dragonair",
  "abilities": [
  {
  "name": "Step In",
  "text": "Once during your turn (before your attack), if Dragonite is on your Bench, you may switch it with your Active Pokémon.",
  "type": "Pokémon Power"
  }
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
  "convertedRetreatCost": 1,
  "set": {
  "id": "base3",
  "name": "Fossil",
  "series": "Base",
  "printedTotal": 62,
  "total": 62,
  "legalities": {
  "unlimited": "Legal"
  },
  "ptcgoCode": "FO",
  "releaseDate": "1999/10/10",
  "updatedAt": "2020/08/14 09:35:00",
  "images": {
  "symbol": "https://images.pokemontcg.io/base3/symbol.png",
  "logo": "https://images.pokemontcg.io/base3/logo.png"
  }
  },
  "number": "4",
  "artist": "Kagemaru Himeno",
  "rarity": "Rare Holo",
  "flavorText": "An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans.",
  "nationalPokedexNumbers": [
  149
  ],
  "legalities": {
  "unlimited": "Legal"
  },
  "images": {
  "small": "https://images.pokemontcg.io/base3/4.png",
  "large": "https://images.pokemontcg.io/base3/4_hires.png"
  },
  "tcgplayer": {
  "url": "https://prices.pokemontcg.io/tcgplayer/base3-4",
  "updatedAt": "2023/02/06",
  "prices": {
  "1stEditionHolofoil": {
  "low": 115.99,
  "mid": 164.98,
  "high": 398.99,
  "market": 238.09
  },
  "unlimitedHolofoil": {
  "low": 32.99,
  "mid": 60,
  "high": 99.99,
  "market": 69.69,
  "directLow": 40
  }
  }
  },
  "cardmarket": {
  "url": "https://prices.pokemontcg.io/cardmarket/base3-4",
  "updatedAt": "2023/02/06",
  "prices": {
  "averageSellPrice": 49.9,
  "lowPrice": 4.5,
  "trendPrice": 46.02,
  "reverseHoloTrend": 40.43,
  "lowPriceExPlus": 30,
  "avg1": 34,
  "avg7": 41.62,
  "avg30": 47.2,
  "reverseHoloAvg1": 81.66,
  "reverseHoloAvg7": 48.96,
  "reverseHoloAvg30": 48.56
  }
  }
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
    "evolvesFrom": "Tentacool",
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
    "set": {
    "id": "base6",
    "name": "Legendary Collection",
    "series": "Other",
    "printedTotal": 110,
    "total": 110,
    "legalities": {
    "unlimited": "Legal"
    },
    "ptcgoCode": "LC",
    "releaseDate": "2002/05/24",
    "updatedAt": "2020/08/14 09:35:00",
    "images": {
    "symbol": "https://images.pokemontcg.io/base6/symbol.png",
    "logo": "https://images.pokemontcg.io/base6/logo.png"
    }
    },
    "number": "66",
    "artist": "Kagemaru Himeno",
    "rarity": "Uncommon",
    "flavorText": "The tentacles are normally kept short. On hunts, the are extended to ensnare and immobilize prey.",
    "nationalPokedexNumbers": [
    73
    ],
    "legalities": {
    "unlimited": "Legal"
    },
    "images": {
    "small": "https://images.pokemontcg.io/base6/66.png",
    "large": "https://images.pokemontcg.io/base6/66_hires.png"
    },
    "tcgplayer": {
    "url": "https://prices.pokemontcg.io/tcgplayer/base6-66",
    "updatedAt": "2023/02/06",
    "prices": {
    "normal": {
    "low": 0.74,
    "mid": 1.55,
    "high": 3,
    "market": 1.31,
    "directLow": 1.15
    },
    "reverseHolofoil": {
    "low": 22.76,
    "mid": 25.13,
    "high": 27.3,
    "market": 25.42
    }
    }
    },
    "cardmarket": {
    "url": "https://prices.pokemontcg.io/cardmarket/base6-66",
    "updatedAt": "2023/02/06",
    "prices": {
    "averageSellPrice": 0.53,
    "lowPrice": 0.15,
    "trendPrice": 0.57,
    "reverseHoloSell": 24.99,
    "reverseHoloLow": 12,
    "reverseHoloTrend": 27.84,
    "lowPriceExPlus": 0.21,
    "avg1": 0.44,
    "avg7": 0.49,
    "avg30": 0.58,
    "reverseHoloAvg1": 24.99,
    "reverseHoloAvg7": 22.17,
    "reverseHoloAvg30": 17.93
    }
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
      "set": {
      "id": "base1",
      "name": "Base",
      "series": "Base",
      "printedTotal": 102,
      "total": 102,
      "legalities": {
      "unlimited": "Legal"
      },
      "ptcgoCode": "BS",
      "releaseDate": "1999/01/09",
      "updatedAt": "2022/10/10 15:12:00",
      "images": {
      "symbol": "https://images.pokemontcg.io/base1/symbol.png",
      "logo": "https://images.pokemontcg.io/base1/logo.png"
      }
      },
      "number": "12",
      "artist": "Ken Sugimori",
      "rarity": "Rare Holo",
      "flavorText": "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.",
      "nationalPokedexNumbers": [
      38
      ],
      "legalities": {
      "unlimited": "Legal"
      },
      "images": {
      "small": "https://images.pokemontcg.io/base1/12.png",
      "large": "https://images.pokemontcg.io/base1/12_hires.png"
      },
      "tcgplayer": {
      "url": "https://prices.pokemontcg.io/tcgplayer/base1-12",
      "updatedAt": "2023/02/06",
      "prices": {
      "holofoil": {
      "low": 9.62,
      "mid": 14.98,
      "high": 40,
      "market": 21.12,
      "directLow": 11
      }
      }
      },
      "cardmarket": {
      "url": "https://prices.pokemontcg.io/cardmarket/base1-12",
      "updatedAt": "2023/02/06",
      "prices": {
      "averageSellPrice": 6.34,
      "lowPrice": 0.24,
      "trendPrice": 9.71,
      "reverseHoloTrend": 19.81,
      "lowPriceExPlus": 5,
      "avg1": 2.02,
      "avg7": 7.61,
      "avg30": 6.62,
      "reverseHoloAvg1": 11.14,
      "reverseHoloAvg7": 11.53,
      "reverseHoloAvg30": 12.92
      }
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
        "abilities": [
        {
        "name": "Curse",
        "text": "Once during your turn (before your attack), you may move 1 damage counter from 1 of your opponent's Pokémon to another (even if it would Knock Out the other Pokémon). This power can't be used if Gengar is Asleep, Confused, or Paralyzed.",
        "type": "Pokémon Power"
        }
        ],
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
        "set": {
        "id": "base3",
        "name": "Fossil",
        "series": "Base",
        "printedTotal": 62,
        "total": 62,
        "legalities": {
        "unlimited": "Legal"
        },
        "ptcgoCode": "FO",
        "releaseDate": "1999/10/10",
        "updatedAt": "2020/08/14 09:35:00",
        "images": {
        "symbol": "https://images.pokemontcg.io/base3/symbol.png",
        "logo": "https://images.pokemontcg.io/base3/logo.png"
        }
        },
        "number": "5",
        "artist": "Keiji Kinebuchi",
        "rarity": "Rare Holo",
        "flavorText": "Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright.",
        "nationalPokedexNumbers": [
        94
        ],
        "legalities": {
        "unlimited": "Legal"
        },
        "images": {
        "small": "https://images.pokemontcg.io/base3/5.png",
        "large": "https://images.pokemontcg.io/base3/5_hires.png"
        },
        "tcgplayer": {
        "url": "https://prices.pokemontcg.io/tcgplayer/base3-5",
        "updatedAt": "2023/02/06",
        "prices": {
        "1stEditionHolofoil": {
        "low": 74.99,
        "mid": 107,
        "high": 225.99,
        "market": 140.69
        },
        "unlimitedHolofoil": {
        "low": 25,
        "mid": 44.99,
        "high": 59.99,
        "market": 44.66
        }
        }
        },
        "cardmarket": {
        "url": "https://prices.pokemontcg.io/cardmarket/base3-5",
        "updatedAt": "2023/02/06",
        "prices": {
        "averageSellPrice": 37,
        "lowPrice": 5,
        "trendPrice": 35.6,
        "reverseHoloTrend": 29.47,
        "lowPriceExPlus": 24.99,
        "avg1": 49.95,
        "avg7": 29.23,
        "avg30": 38.2,
        "reverseHoloAvg1": 95,
        "reverseHoloAvg7": 31.3,
        "reverseHoloAvg30": 31.56
        }
        }
        }]
//rival's party: Dragonite, Tentacruel, Ninetales, Gengar

//auto add the items given to player by default (rival will not use items)
const addItems = () => {
  let itemsBag = document.querySelector('.all-cards')
  inventoryItems.forEach((item) => {
    let newItem = document.createElement('div')
    newItem.innerHTML = `<img class="item" id="${item.name}" src='${item.images.small}' alt='${item.id}'></img>`
    itemsBag.append(newItem)
  })
}
//call auto add items function to initiate items inventory on page load
addItems()

//create for loop to add event listener for each item 




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
  console.log(candidateArr[0])
  //create event listener for option to add searched pokemon into party
  let searchedPokemon = document.querySelector('.current-playing')
  searchedPokemon.addEventListener("click", () => {
    let playerParty = document.querySelector('.player-party')
    let newPokemon = document.createElement('div')
    newPokemon.innerHTML = `<img class="add-pokemon" id="${candidateArr[0].name}" src='${candidateArr[0].images.small}' alt='${res.data[0].name}'>`
    playerParty.append(newPokemon)

    //push the selected pokemon's object array into player list to access attributes
    player.push(candidateArr[0])
    console.log(player)
  })  
}

//create function to show "start battle" button when user's party has four pokemon
const startBattle = () => {
  let battleSpace = document.querySelector('.battle-container')
  let startButton = document.createElement('button')
  startButton.className = 'start-button'
  startButton.innerHTML = "Start Battle!"
  battleSpace.append(startButton)
  // startButton.addEventListener("click", someFunc())
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
      startBattle()
      // console.log(player)
    })
    .catch(err => {
      console.log("something went wrong...", err)
    })
}

let button = document.querySelector('#searchButton')
button.onclick = getData

const inputBar = document.getElementById('inputBar')
inputBar.addEventListener("keypress", (event)=>{
  if(event.key === 'Enter'){
    event.preventDefault()
    getData()
  }
})


// import data from './rivalParty.json' assert {type:'JSON'}
// console.log(data)