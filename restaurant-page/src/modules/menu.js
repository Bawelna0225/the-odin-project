const foodData = `[
    {
        "name": "Pierogi",
        "picture": "../dist/images/pierogi.jpg"
    },
    {
        "name": "Pizza",
        "picture": "../dist/images/pizza.jpg"
    },
    {
        "name": "Fries",
        "picture": "../dist/images/fries.jpg"
    },
    {
        "name": "Hamburger",
        "picture": "../dist/images/hamburger.jpg"
    },    
    {
        "name": "Spaghetti",
        "picture": "../dist/images/spaghetti.jpg"
    },
    {
        "name": "Hot Dog",
        "picture": "../dist/images/hotdog.jpg"
    } 
]`

const parsedFoodData = JSON.parse(foodData)

export const loadMenu = () => {
	const section = document.createElement('section')
	const cardContainer = document.createElement('div')
	cardContainer.classList.add('container')

    parsedFoodData.map((food) => {
        const card = document.createElement('div')
		card.classList.add('food-card')
		const foodTitle = document.createElement('span')
		foodTitle.innerHTML = food.name
        card.style.backgroundImage = `url(${food.picture})`
        
		card.appendChild(foodTitle)
		cardContainer.appendChild(card)
    })

	content.appendChild(section)
	section.appendChild(cardContainer)
}
