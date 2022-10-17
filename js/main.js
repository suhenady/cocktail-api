//Example fetch using pokemonapi.co updated to cocktail API. 

document.querySelector('.getButton').addEventListener('click', getDrink)
document.querySelector('.stopButton').addEventListener('click', stopDrink)

let drinkArray = []

function getDrink(){
  let drink = document.querySelector('input').value
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drink

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        for(let x = 0; x < data.drinks.length; x++) {
          drinkArray.push(data.drinks[x])
        }

        console.log(drinkArray)

        document.querySelector('#ingredientOne').innerText = '-'+drinkArray[0].strIngredient1
        document.querySelector('#ingredientTwo').innerText = '-'+drinkArray[0].strIngredient2
        document.querySelector('#ingredientThree').innerText = '-'+drinkArray[0].strIngredient3
        document.querySelector('#instructions').innerText = drinkArray[0].strInstructions
        document.querySelector('h2').innerText = drinkArray[0].strDrink
        document.querySelector('img').src = drinkArray[0].strDrinkThumb
      })

      .catch(err => {
          console.log(`error ${err}`)
      });
      
      start()

    }

function showDrink() {
  document.querySelector('#ingredientOne').innerText = '-'+drinkArray[i].strIngredient1
  document.querySelector('#ingredientTwo').innerText = '-'+drinkArray[i].strIngredient2
  document.querySelector('#ingredientThree').innerText = '-'+drinkArray[i].strIngredient3
  document.querySelector('#instructions').innerText = drinkArray[i].strInstructions
  document.querySelector('h2').innerText = drinkArray[i].strDrink
  document.querySelector('img').src = drinkArray[i].strDrinkThumb
  i++
}

let intervalID

let i = 1

function start() {
  intervalID = setInterval(showDrink, 5000);
}

function stopDrink() {
  clearInterval(intervalID);
}



/*function getDrink(){
  let drink = document.querySelector('input').value
  let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drink

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.drinks[0])
        document.querySelector('#ingredientOne').innerText = '-'+data.drinks[0].strIngredient1
        document.querySelector('#ingredientTwo').innerText = '-'+data.drinks[0].strIngredient2
        document.querySelector('#ingredientThree').innerText = '-'+data.drinks[0].strIngredient3
        document.querySelector('#instructions').innerText = data.drinks[0].strInstructions
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }*/