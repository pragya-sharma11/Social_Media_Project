const ADJECTIVES = [
    'boundless', 'passionate', 'invinsible', 'sleepy', 'dangerous', 'eggy', 'chickky', 'fleshy'
]

const FOODS = [
    'pizza', 'burger', 'pasta', 'fries', 'hotdog', 'macroni', 'sandwich', 'Shushi'
]

function getRandomUserName() {
    let adj = ADJECTIVES[Math.floor(Math.random()*8)]
    let food = FOODS[Math.floor(Math.random()*8)]
    return `${adj} ${food}`

}

module.exports={
    getRandomUserName
}