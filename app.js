



const selectCard = (res) => {
  let cardDisplay = document.querySelector('.card-container')
  let candidateArr = []
  for(i = 0; i < res.data.length; i++){
    if(res.data[i].id.startsWith('base')){
      candidateArr.push(res.data[i])
    }
  }
  // let candidate = document.createElement('p')
  cardDisplay.innerHTML = `<img src='${candidateArr[0].images.small}' alt='${res.data[0].name}'>`
  console.log(candidateArr[0])
  // candidatesList.append(candidate)
  }


async function getData(event){
  // event.preventDefault()

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