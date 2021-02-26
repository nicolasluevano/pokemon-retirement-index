//Example fetch using pokemonapi.co
//Ebay link https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=Blaine%27s+Charizard&_sacat=0

document.querySelector('#button-addon2').addEventListener('click', generateCards)


function generateCards(){
document.querySelector('#cards-container').innerHTML = ""
let userPokemonInput = document.querySelector('.form-control').value
console.log(userPokemonInput)
let url = `https://api.pokemontcg.io/v2/cards?q=name:${userPokemonInput}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data)


        //ADD NEW CARDS TO SCREEN
        data.data.forEach(function(pokemon){

          //PRICE VARIABLES
          let prices = pokemon.tcgplayer.prices
          let priceRanges = Object.values(prices)[0]
          console.log(priceRanges)

          let marketPrice = priceRanges.market
          let highPrice = priceRanges.high
          let lowPrice = priceRanges.low
          let lastUpdatedPrice = data.data[0].tcgplayer.updatedAt

      

          //create container
          console.log(pokemon)
          let cardContainer = document.createElement('div')
          cardContainer.classList.add('card')
          cardContainer.style.width="18rem"
          document.querySelector('#cards-container').appendChild(cardContainer)//apend goes last

          //create img
          let cardImage = document.createElement('img')
          cardImage.classList.add('card-img-top')
          cardImage.src = pokemon.images.small
          cardContainer.appendChild(cardImage)
        

          //create div card-body
          let cardBody = document.createElement('div')
          cardBody.classList.add('card-body')
          cardContainer.appendChild(cardBody)

          //create h5
          let cardTitle = document.createElement('h5')
          cardTitle.classList.add('card-title', 'pokemon-name')
          cardBody.innerText = pokemon.name
          cardContainer.appendChild(cardTitle)

          //create ul 
          let cardList = document.createElement('ul')
          cardList.classList.add('list-group')
          cardList.classList.add('list-group-flush')
          cardContainer.appendChild(cardList)

          //create li market price
          let cardListItemOne = document.createElement('li')
          cardListItemOne.classList.add('list-group-item')
          cardListItemOne.innerText = `Market: $${marketPrice}`
          cardContainer.appendChild(cardListItemOne)

          //create li high price
          let cardListItemTwo = document.createElement('li')
          cardListItemTwo.classList.add('list-group-item','high-price')
          cardListItemTwo.innerText = `High: $${highPrice}`
          cardContainer.appendChild(cardListItemTwo)

          //create li low price
          let cardListItemThree = document.createElement('li')
          cardListItemThree.classList.add('list-group-item','low-price')
          cardListItemThree.innerText = `Low: $${lowPrice}`
          cardContainer.appendChild(cardListItemThree)

          //create li last updated price
          let cardListItemFour = document.createElement('li')
          cardListItemFour.classList.add('list-group-item', 'last-updated')
          cardListItemFour.innerText = `last updated: ${lastUpdatedPrice}`
          cardContainer.appendChild(cardListItemFour)

          //create ebaylinkcontainer
          let ebayLinkContainer = document.createElement('div')
          ebayLinkContainer.classList.add('card-body')
          cardContainer.appendChild(ebayLinkContainer)

          //ebayLink
          let ebayLink = document.createElement('a')
          ebayLink.classList.add('card-link')
          ebayLink.setAttribute('target','_blank')
          ebayLink.innerHTML = 'Check Ebay'
          ebayLink.href = `https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=${pokemon.name}+${pokemon.set.id}&_sacat=0`
          ebayLinkContainer.appendChild(ebayLink)

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      })
}

//TO TOP BUTTON 


  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera





      
