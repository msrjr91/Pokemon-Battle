



const selectCard = (res) => {
  let candidatesList = document.querySelector('.candidates')
  let candidateArr = []
  for(i = 0; i < res.data.length; i++){
    if(res.data[i].id.startsWith('base')){
      candidateArr.push(res.data[i])
    }
  }
  let candidate = document.createElement('li')
  candidate.innerHTML = `<img src='${candidateArr[0].images.small}' alt='${res.data[0].name}'>`
  candidatesList.append(candidate)
  }


async function getData(event){
  event.preventDefault()

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

let button = document.querySelector('#searchButton')
button.onclick = getData