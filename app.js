//ITEM OBJECTS:
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

let player = []
let rival = []

//initiate rival's party (hidden until player adds four pokemon)
const createRival = () => {
  
}



//auto add the items given to player by default
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




// this function only selects the very first version of the card to ever release
const selectCard = (res) => {
  let cardDisplay = document.querySelector('.card-container')
  let candidateArr = []
  for(i = 0; i < res.data.length; i++){
    if(res.data[i].id.startsWith('base')){
      candidateArr.push(res.data[i])
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
    newPokemon.innerHTML = `<img class="add-pokemon" src='${candidateArr[0].images.small}' alt='${res.data[0].name}'>`
    playerParty.append(newPokemon)

    //push the selected pokemon's object array into player list to access attributes
    player.push(candidateArr[0])
  })
  
  

  }



// connect to pokemon tcg api 
async function getData(){
  let textInput = document.querySelector('#inputBar').value
  const url =  `https://api.pokemontcg.io/v2/cards?q=name:${textInput}`

  // const url = `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[${i} TO ${i}]`
  // const url = `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 151]`

  fetch(url)
    .then(res => {
      return res.json()
    })
    .then(res => {
      console.log
      selectCard(res)
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