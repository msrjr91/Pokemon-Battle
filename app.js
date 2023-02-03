

let userName = 'michael.s.ross10'

async function getData(event){
  event.preventDefault()

  let url = 'https://www.codewars.com/api/v1/users/michael.s.ross10'

  fetch(url)
    .then(res => {
      return res.json()
    })
    .then(res => {
      console.log("success!", res)
      // let heading = document.querySelector('.title')
      // heading.innerText = res
    })
}

let button = document.querySelector('#searchButton')
// let inputBox = document.querySelector('#inputBar')
// inputBox.addEventListener("keyup", function(event){
//   if(event.key !== 'Enter') return;
//   button.click()
//   event.preventDefault()
//   })

button.onclick = getData